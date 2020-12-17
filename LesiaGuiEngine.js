class LesiaGuiEngine {
  constructor(
    canObj = {
      type: "2d",
      size: {
        w: 1920,
        h: 1080,
      },
      target: document.querySelector("body"),
      element: {
        renderText: {
          helloword: {
            content: "Hello world!",
            color: "red",
            pos: {
              x: 1920 / 2,
              y: 1080 / 2,
            },
          },
        },
      },
    }
  ) {
    this.data = { cnaObj };
    this.ctx = cnaObj.target.getContext(cnaObj.type);
  }
  getCtx() {
    let ret = this.data;
    ret.set = (value) => {
      ret = value;
      this.Rendering(ret);
    };
    return this.data;
  }
  Rendering(obj = this.data) {
    for (const Key in obj.element) {
      let element = obj.element[Key];
      if (this[Key] !== undefined) {
        for (const key in element) {
          this[Key](element[key]);
        }
      }
    }
  }
  renderText() {}
}
