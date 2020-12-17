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
        text: {
          helloword: {
            content: "Hello world!",
            color:"red",
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
  }
  getCtx() {
    return this.data;
  }
  Rendering() {
    for (const key in this.data.element) {
      switch (key) {
        case "text":
          this.RenderingText();
          break;
      }
    }
  }
  RenderingText()
}
