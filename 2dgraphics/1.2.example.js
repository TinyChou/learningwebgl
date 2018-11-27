var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.font = '38pt Arial';
context.fillStyle = 'cornflowerblue';
context.strokeStyle = 'blue';

context.fillText('Hello Canvas', canvas.width / 2 - 150,
  canvas.height / 2 + 15);
context.strokeText('Hello Canvas', canvas.width / 2 - 150,
  canvas.height / 2 + 15);

// attibutes:
// 1.width
// 2.height

// methods:
// 1.getContext()
// 2.toDataURL(type, quality)
// 3.toBlob(callback, type, args, ...)

// CanvasRenderingContext2D
// attibutes
// 1.canvas    context.canvas.width context.canvas.height
// 2.fillStyle specifies a color, gradient, or pattern
// 3.font for fillText() or strokeText()
// 4.globalApha 0~1.0
// 5.globalCompositeOperation
// 6.lineCap butt, round, square
// 7.lineWidth default 1.0
// 8.lineJoin bevel, round, miter
// 9.miterLimit
// 10.shadowBlur
// 11.shadowColor
// 12.shadowOffsetX
// 13.shadowOffsetY
// 14.strokeStyle
// 15.textAlign
// 16.textBaseline

// state methods
// 1.save() transformation, clipping region and all attributes of context
//   not include the current path(beginPath) or bitmap(context.getImageData())
// 2.restore()

// A way to hit testing: https://stackoverflow.com/a/37589323
