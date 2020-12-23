window.onload = function () {
    this.$ = (id) => document.querySelector(id);
    let box = $(".box");

    let canObj = {
        type: "2d",
        size: {
            w: 1920,
            h: 1080,
        },
        target: box,
        element: {
            renderArc: {
            },
            renderText: {
                helloword: {
                    style: {
                        fillStyle: "pink",
                        strokeStyle: "#aaf5f5",
                        font: "192px Arial",
                        textAlign: "center",
                        lineWidth: 10
                    },
                    content: "Hello world!",
                    x: 960,
                    y: 600,
                    type: "strokeText", //fillText 填充 strokeText 描边
                },
            }
        },
    };

    let lesiaUi = new LesiaGuiEngine(canObj);

    lesiaUi.Animation(function (element) {
        let helloword = element.renderText.helloword;
        helloword.x += Math.random() - 0.5;
        helloword.y += Math.random() - 0.5;
    });
};
