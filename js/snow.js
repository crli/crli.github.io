/*
 * @Author: crli
 * @Date: 2019-12-08 21:07:08
 * @LastEditors: crli
 * @LastEditTime: 2019-12-08 21:10:02
 * @Description: file content
 */
function showSnow() {
  var canvas = document.getElementById("snow");
  var imgSnow = document.getElementById("imgSnow");
  var ctx = canvas.getContext('2d');

  canvas.width = $("body").width();
  canvas.height = $("body").height();

  var GetRandomNum = function (Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
  }

  var snowArray = {}; //雪花对象
  var snowIndex = 0; //标识符
  var setting = {
    num: 20, //数量
    snowSize: 20, //大小
    startX: Math.random() * canvas.width, //起始横坐标
    startY: 0, //起始纵坐标
    vy: 0.01
  }

  function snow() {
    // 起始横坐标
    this.x = Math.random() * canvas.width;
    // 起始纵坐标
    this.y = setting.startY;
    this.size = setting.snowSize + Math.random() * 10 - 10;

    //横坐标偏移量
    this.vx = Math.random() * 3 - 2; //偏移量
    //纵坐标偏移量
    this.vy = Math.random() * 10;

    this.life = 0;
    this.maxLife = 10;
    this.id = snowIndex;
    //当前信息保存至对象snowArray
    snowArray[snowIndex] = this;

    snowIndex++;
  }

  snow.prototype.draw = function () {
    this.x += this.vx;
    this.y += this.vy;

    this.vy += setting.vy;


    this.life++;

    //删除
    if (this.y > canvas.height * 0.9 - 20) {
      snowArray[this.id]
    } else if (this.life >= this.maxLife) {
      snowArray[this.id]
    }

    ctx.drawImage(imgSnow, this.x, this.y, this.size, this.size)
  }

  setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //背景
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    //数
    for (var i = 0; i < setting.num; i++) {
      if (Math.random() > 0.97) {
        new snow();
      }
    }

    for (var i in snowArray) {
      snowArray[i].draw();
    }

  }, 300)
}