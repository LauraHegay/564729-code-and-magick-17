'use strict';

window.renderStatistics = function (ctx, names, times) {
  var BAR_X = 130;
  var BAR_Y = 100;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var BAR_GAP = 50;

  drawCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  drawCloud(ctx, 100, 10, 'rgba(255, 255, 255, 1)');
  drawText(ctx, 130, 40, 'Ура вы победили!', 'rgba(0, 0, 0, 1)');
  drawText(ctx, 130, 60, 'Список результатов:', 'rgba(0, 0, 0, 1)');

  var timeWinner = getMaxNumber(times);
  var x = BAR_X;
  for (var i = 0; i < names.length; i++) {
    drawColumn(ctx, names[i], times[i], timeWinner, x, BAR_Y, BAR_WIDTH, BAR_HEIGHT, BAR_GAP);
    x = x + BAR_WIDTH + BAR_GAP;
  }
};

// Получение случайного числа
var getRandomNumber = function () {
  var RandomNumber = Math.floor(Math.random() * 10 + 1) / 10;
  return RandomNumber;
};

// Получение максимального элемента из масива
var getMaxNumber = function (times) {
  var maxTime = times[0];
  for (var i = 0; i < times.length; i++) {
    if (times[i + 1] > maxTime) {
      maxTime = times[i + 1];
    }
  }
  maxTime = Math.round(maxTime);
  return maxTime;
};

// Нарисовать облако
var drawCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 420, 270);
};
// Нарисовать текст
var drawText = function (ctx, x, y, text, color) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

// Рисование колонки
var drawColumn = function (ctx, name, time, timeWinner, x, BAR_Y, BAR_WIDTH, BAR_HEIGHT) {
  var barOpacity = getRandomNumber();
  time = Math.round(time);
  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'rgba(0, 0, 255,' + barOpacity + ')';
  }
  if (time === timeWinner) {
    var barCurrentHeight = BAR_HEIGHT;
  } else {
    barCurrentHeight = Math.round(time * BAR_HEIGHT / timeWinner);
  }
  ctx.fillRect(x, BAR_Y + BAR_HEIGHT - barCurrentHeight, 40, barCurrentHeight);
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText(time, x, 90 + BAR_HEIGHT - barCurrentHeight);
  ctx.fillText(name, x, 270);
};
