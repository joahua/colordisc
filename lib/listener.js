import colorSelector from './colorSelector';

export default (canvas) => {
  let handler = colorSelector.handler(canvas);

  canvas.addEventListener('click', handler);
  canvas.addEventListener('touchstart', handler);
  canvas.addEventListener('touchmove', handler);
  canvas.addEventListener('touchend', handler);
};
