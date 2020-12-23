class LesiaGuiEngine {
  constructor(canObj) {
    this.data = canObj;
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.data.size.w;
    this.canvas.height = this.data.size.h;
    this.ctx = this.canvas.getContext(canObj.type);
    this.data.target.appendChild(this.canvas);
    this.defaultStyle = {};
    this.Rendering(); //首次渲染
  }
  Animation(fn) {
    let b = fn(this.data.element);
    if (!b) {
      requestAnimationFrame(() => {
        this.ctx.clearRect(0, 0, this.data.size.w, this.data.size.h);
        this.Animation(fn);
        this.Rendering();
      });
    }
  }
  Rendering(obj = this.data.element) {
    for (const Key in obj) {
      let element = obj[Key];
      if (this[Key] !== undefined) {
        for (const key in element) {
          this[Key](element[key]);
        }
      }
    }
  }
  renderStyle(style, fn) {
    let temporary = {};
    this.ctx.beginPath();
    Object.keys(style).forEach((key) => {
      temporary[key] = this.ctx[key];
      this.ctx[key] = style[key];
    });
    fn();
    Object.keys(temporary).forEach((key) => {
      this.ctx[key] = temporary[key];
    });
  }
  renderText(obj) {
    let { style, content, x, y, type } = obj;
    this.renderStyle(style, () => {
      this.ctx[type](content, x, y);
    });
  }
  renderRect(obj) {
    let { style, x, y, w, h, type } = obj;
    this.renderStyle(style, () => {
      this.ctx.rect(x, y, w, h);
      this.ctx[type]();
    });
  }
  renderImg(obj) {//绘制图片
    let { style, x, y, w, h, sx, sy, swidth, sheight, dom } = obj;
    this.renderStyle(style, () => {
      if (sx != undefined) {
        this.ctx.drawImage(dom, sx, sy, swidth, sheight, x, y, w, h);
      } else if (w != undefined) {
        this.ctx.drawImage(dom, x, y, w, h);
      } else {
        this.ctx.drawImage(dom, x, y);
      }
    });
    return { x, y, w, h }//todo-碰撞检测
  }
  renderImageData(obj) {//像素操作
    let { style, data, w, h, x, y } = obj;
    this.renderStyle(style, () => {
      let imgData = this.ctx.createImageData(w, h);
      imgData.data = data;
      this.ctx.putImageData(imgData, x, y);
    })
  }
  renderRoute(obj) {//路径
    let { style, routeArr, type } = obj;
    this.renderStyle(style, () => {
      this.ctx.moveTo(routeArr[0][0], routeArr[0][1]);
      let Len = routeArr.length;
      for (let i = 1; i < Len; i++) {
        this.ctx.lineTo(routeArr[i][0], routeArr[i][1]);
      }
      if (type == "fill") {
        this.ctx.closePath();
      }
      this.ctx[type]();
    })
  }
  renderArc(obj) {
    let { style, x, y, r, s, e, c, type } = obj;
    if (c == undefined) {
      c = false;
    }
    this.renderStyle(style, () => {
      this.ctx.arc(x, y, r, s * Math.PI, e * Math.PI, c);
      this.ctx[type]();
    })
  }
}
