export default {
  handler: (canvas) => {
    let trueSize = (property) => parseInt(getComputedStyle(canvas)[property], 10);

    let colorSelector = (event) => {
      let rgba = canvas.ctx.getImageData(
        event.offsetX / trueSize('width') * canvas.width,
        event.offsetY / trueSize('height') * canvas.height,
        1, 1
      ).data.slice(-4);

      let color = 'rgba(' + rgba.join(',') + ')';

      document.body.style.backgroundColor = color;
    };

    return colorSelector;
  }
};
