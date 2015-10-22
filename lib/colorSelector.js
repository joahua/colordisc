export default {
  handler: (canvas) => {
    let ctx = canvas.ctx;
    let width = canvas.width;
    let height = canvas.height;

    let trueSize = (property) => parseInt(getComputedStyle(canvas)[property], 10);

    let colorSelector = (event) => {
      let rgba = ctx.getImageData(
        event.offsetX / trueSize('width') * width,
        event.offsetY / trueSize('height') * height,
        1, 1
      ).data.slice(-4);
      let bgColor = 'rgba(' + rgba.join(',') + ')';
      document.body.style.backgroundColor = bgColor;
      // console.log(bgColor);
    };

    return colorSelector;
  }
};
