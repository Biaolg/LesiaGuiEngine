class LesiaGuiEngine {
  constructor(
    canObj
  ) {
    this.data = canObj;
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.data.size.w;
    this.canvas.height = this.data.size.h;
    this.ctx = this.canvas.getContext(canObj.type);
    this.data.target.appendChild(this.canvas);
    this.Rendering();//首次渲染
  }
  getCtx() {
    let slef = this;
    let element = JSON.parse(JSON.stringify(slef.data.element));
    let rongq = {};

    Object.keys(element).forEach(key => {
      if (key != "defaultStyle") {
        let obj = element[key];
        Object.keys(obj).forEach(item => {
          rongq[key] = new Proxy(obj[item], {
            get: function (target, propKey, receiver) {
              return Reflect.get(target, propKey, receiver);
            },
            set: function (target, propKey, value, receiver) {
              baogao([key,item,propKey],value);
              console.log(propKey);
              return Reflect.set(target, propKey, value, receiver);
            }
          })
        })
      }
    });

    function baogao(arrkey, value) {
      let [key1,key2,key3] = arrkey;
      console.log(arrkey)
      slef.data.element[key1][key2][key3] = value;
      slef.Rendering();
    }

    return element;
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
  renderText(obj) {
    console.log(obj);
  }
}