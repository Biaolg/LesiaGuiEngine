window.onload = function () {

    this.$ = id => document.querySelector(id);
    let box = $(".box");

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
                    style:{
                        color: "red",
                    },
                    content: "Hello world!",
                    x: 0,
                    y: 0
                },
            },
        },
    }

    let lesiaUi = new LesiaGuiEngine(canObj);

    lesiaUi.Animation(function(element){
        
    })
}