'use strict';

window.renderStatistics = function (ctx, names, times) {
  var BAR_X = 130;
  var BAR_Y = 100;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var BAR_GAP = 50;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);
  var NumWinner = 0;
  for (var i = 0; i < names.length; i++) {
    if (times[i + 1] > times[NumWinner]) {
      NumWinner = i + 1;
    }
  }
  for (i = 0; i < names.length; i++) {
    var BAR_OPACITY = Math.floor(Math.random() * 10 + 1) / 10;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + BAR_OPACITY + ')';
    }
    if (i === NumWinner) {
      var BarCurrentHeight = BAR_HEIGHT;
    } else {
      BarCurrentHeight = Math.floor(times[i] * BAR_HEIGHT / times[NumWinner]);
    }
    ctx.fillRect(BAR_X, BAR_Y + BAR_HEIGHT - BarCurrentHeight, 40, BarCurrentHeight);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(Math.floor(times[i]), BAR_X, 90 + BAR_HEIGHT - BarCurrentHeight);
    ctx.fillText(names[i], BAR_X, 270);
    BAR_X = BAR_X + BAR_WIDTH + BAR_GAP;
  }
};
