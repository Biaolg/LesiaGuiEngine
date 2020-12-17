window.onload = function () {

    this.$ = id => document.querySelector(id);
    let box = $(".box");
    console.log(box)
    let canObj = {
        type: "2d",
        size: {
            w: 1920,
            h: 1080,
        },
        target: box,
        element: {
            defaultStyle: {
                sColor: "#000",
                fColor: "red"
            },
            renderText: {
                helloword: {
                    content: "Hello world!",
                    color: "red",
                    x: 0,
                    y: 0
                },
            },
        },
    }

    let lesiaUi = new LesiaGuiEngine(canObj);
    let ctx = lesiaUi.getCtx();
    console.log(ctx);
    ctx.renderText.helloword.content = "001";
}