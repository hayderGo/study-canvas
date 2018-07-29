/**
 * Created by hayder on 2018/7/24.
 */
const utils = {};

utils.deg2Rad = function (deg) {
  return deg / 180 * Math.PI;
};

utils.rad2Deg = function (rad) {
  return rad / Math.PI * 180;
};

utils.captureMouse = function (element) {
  var mouse = {
    x: 0,
    y: 0
  };
  element.addEventListener('mousemove', function (e) {
    var x,
        y;
    if (e.pageX || e.pageY) {
      x = e.pageX;
      y = e.pageY;
    }
    else {
      x = e.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
      y = e.clientY + document.documentElement.scrollTop + document.body.scrollTop;
    }
    x -= element.offsetLeft;
    y -= element.offsetTop;
    mouse.x = x;
    mouse.y = y;
  }, false);
  
  return mouse;
};

utils.color2RGB = function (color, alpha) {
  if (typeof color === 'string' && color[0] === '#') {
    color = parseInt(color.slice(1), 16);
  }
  alpha = typeof alpha === undefined ? 1 : isNaN(Number(alpha)) ? 1 : Number(alpha);
  var r = color >> 16 & 0xff,
      g = color >> 8 & 0xff,
      b = color & 0xff;
  var a = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
  if (a = 1) {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  return 'rgb(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
};