// components/polygon/index.js

var context = null
var canvasWidth = 0
var canvasHeight = 0


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerColor: {
      type: String,
      value: '#dddddd'
    },
    lineColor: {
      type: String,
      value: '#000000'
    },
    edgeNumber: {
      type: Number,
      value: 4
    },
    textSize: {
      type: Number,
      value: 20
    },
    polygons: {
      type: Array,
      value: []
    },
    texts: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  ready() {
    context = wx.createCanvasContext('polygon', this);

    var that = this
    const obj = this.createSelectorQuery()
    obj.select('#polygon').boundingClientRect()
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
      if (this.properties.polygons.length < 3) {
        return
      }
      if (this.properties.texts.length < this.properties.polygons.length) {
        for (let i = this.properties.polygons.length; i >= this.properties.texts.length;i--) {
          this.properties.texts.push('空')
        }
      }
      var center_x = canvasWidth / 2
      var center_y = canvasHeight / 2
      var radius = (((canvasWidth > canvasHeight) ? canvasHeight : canvasWidth) - this.properties.textSize * 2) / 2
      var innerAngle = (360 / this.properties.polygons.length);

      //画雷达图
      context.setFillStyle(this.properties.innerColor)
      context.setStrokeStyle(this.properties.lineColor)
      context.setLineWidth(1)
      context.beginPath()

      for (let i = 0; i < this.properties.polygons.length; i++) {
        var f = this.properties.polygons[i]
        if (f > 1) {
          f = 1
        }
        if (f < 0) {
          f = 0
        }
        var currentRadius = radius * f

        var x = center_x - Math.cos(this.angleToRadian(90 - innerAngle * i)) * currentRadius
        var y = center_y - Math.sin(this.angleToRadian(90 - innerAngle * i)) * currentRadius
        context.lineTo(x, y)
      }
      context.closePath()
      context.fill()

      //画分割线
      for (let i = 0; i <= this.properties.edgeNumber; i++) {
        context.setLineWidth(1)
        context.beginPath()
        for (let j = 0; j < this.properties.polygons.length; j++) {
          var x = center_x - Math.cos(this.angleToRadian(90 - innerAngle * j)) * (radius * i / this.properties.edgeNumber)
          var y = center_y - Math.sin(this.angleToRadian(90 - innerAngle * j)) * (radius * i / this.properties.edgeNumber)
          context.lineTo(x, y)
        }
        context.closePath()
        context.stroke()
      }

      //画对角线
      for (let j = 0; j < this.properties.polygons.length; j++) {
        context.beginPath()
        context.lineTo(center_x, center_y)
        var x = center_x - Math.cos(this.angleToRadian(90 - innerAngle * j)) * radius
        var y = center_y - Math.sin(this.angleToRadian(90 - innerAngle * j)) * radius
        context.lineTo(x, y)
        context.closePath()
        context.stroke()
      }

      //写文字
      for (let j = 0; j < this.properties.texts.length; j++) {
        let text = this.properties.texts[j]
        context.lineTo(center_x, center_y)
        var x = center_x - Math.cos(this.angleToRadian(90 - innerAngle * j)) * (radius + this.properties.textSize / 2)
        var y = center_y - Math.sin(this.angleToRadian(90 - innerAngle * j)) * (radius + this.properties.textSize / 2)
        context.beginPath();
        context.setFontSize(12); // 字体大小 注意不要加引号
        context.setFillStyle("#000000"); // 字体颜色
        context.setTextAlign("center"); // 字体位置
        context.setTextBaseline("middle"); // 字体对齐方式
        context.fillText(text, x, y); // 文字内容和文字坐标
      }

      context.draw()
    },

    angleToRadian(angle) {
      return 2 * Math.PI / 360 * angle
    }
  }
})