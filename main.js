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
      renderText: {
        helloword: {
          style: {
            fillStyle: "pink",
            font: "192px Arial",
          },
          content: "Hello world!",
          x: 100,
          y: 100,
          type: "fillText", //fillText 填充 strokeText 描边
        },
      },
    },
  };

  let lesiaUi = new LesiaGuiEngine(canObj);

  lesiaUi.Animation(function (element) {
    let helloword = element.renderText.helloword;
    helloword.x += 1;
    helloword.y += 2;
  });
};
