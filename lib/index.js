import listener from './listener';

export default function colordisc(target) {
  let canvas = this.canvas = document.getElementById(target) || document.querySelector(target);
  let ctx = this.ctx = canvas.getContext('2d');

  let width = this.width = canvas.width;
  let height = this.height = canvas.height;

  ctx.translate(width / 2, height / 2);

  ctx.fillStyle = 'white';
  newArc();
  ctx.fill();

  for (var i = 12 - 1, ratio = 360 / i; i >= 0; i--) {
    let deg = i * ratio;
    rotateNewFill(0, 0, deg);
  }

  listener(canvas, ctx);

  function rotateNewFill(x, y, deg) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(deg * Math.PI / 180);
    ctx.translate(-x, -y);

    newFill(deg);

    ctx.restore();
  }

  function newFill(deg) {
    ctx.fillStyle = stops(deg);
    newArc();
    ctx.fill();
  }

  function newArc() {
    ctx.beginPath();
    ctx.arc(0, 0, width / 2, 0, 2 * Math.PI);
  }

  function stops(deg) {
    let grad = ctx.createLinearGradient(0, 0, width, height);

    grad.addColorStop(0, `hsla(${deg},30%,30%,0)`);
    grad.addColorStop(1.0, `hsla(${deg},90%,50%,1)`);

    return grad;
  }
}
