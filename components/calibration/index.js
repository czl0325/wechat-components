// components/calibration/index.js

var context = null
var canvasWidth = 0
var canvasHeight = 0

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    startAngle: {
      type: Number,
      value: Math.PI / 6 * 7
    },
    progress: {
      type: Number,
      value: 0.0,
      observer(value) {
        this.run()
      }
    },
    state: {
      type: String,
      value: '信用极好',
      observer(value) {
        this.run()
      }
    },
    score: {
      type: String,
      value: '780',
      observer(value) {
        this.run()
      }
    },
    time: {
      type: String,
      value: '评估时间:2019-06-18',
      observer(value) {
        this.run()
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  ready() {
    context = wx.createCanvasContext('calibration', this);

    var that = this
    const obj = this.createSelectorQuery()
    obj.select('#calibration').boundingClientRect()
    obj.exec(function(rect) {
      canvasWidth = rect[0].width
      canvasHeight = rect[0].height
      that.run()
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {
    run() {
      if (!context)
        return
      var progress = this.properties.progress
      if (progress > 1) {
        progress = 1
      }
      if (progress < 0) {
        progress = 0
      }
      var center_x = canvasWidth / 2
      var center_y = canvasHeight / 2
      center_y = center_x
      var radius = canvasWidth / 2 - 5

      context.setStrokeStyle('white')
      context.setLineWidth(3)
      context.setFillStyle('white')

      context.arc(center_x, center_y, radius, Math.PI / 6 * 5, Math.PI / 6, false)
      context.stroke()

      radius = radius - 10
      for (var i = 0; i < 49; i++) {
        context.beginPath()
        var x = 0
        var y = 0
        x = center_x + Math.cos(this.properties.startAngle - 0.08726645 * i) * radius
        y = center_y - Math.sin(this.properties.startAngle - 0.08726645 * i) * radius
        context.arc(x, y, 2, 0, 2 * Math.PI)
        context.closePath()
        context.fill()
      }

      context.save()
      //var canvas = wx.createContext();
      var xx = center_x + Math.cos(this.properties.startAngle - 0.08726645 * 48 * progress + 0.09) * (radius - 20) 
      var yy = center_y - Math.sin(this.properties.startAngle - 0.08726645 * 48 * progress + 0.09) * (radius - 20)
      context.translate(xx, yy)
      context.rotate(-(this.properties.startAngle - 0.08726645 * 49 * progress));
      context.drawImage('./res/icon_scale.png', 0, 0, 17, 11)
      context.restore()

      context.setFontSize(18)
      context.setTextAlign('center')
      context.fillText(this.properties.state, center_x, 60)

      context.setFontSize(13)
      context.fillText(this.properties.time, center_x, 140)

      context.font = "bold 35px Arial";
      context.fillText(this.properties.score, center_x, 100)

      context.draw()
    },

    angleToRadian(angle) {
      return 2 * Math.PI / 360 * angle
    },

    radianToAngle(radian) {
      return radian * (180 / Math.PI)
    }
  }
})