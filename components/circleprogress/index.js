// components/circleprogress/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lineWidth: {
      type: Number,
      value: 8
    },
    normalColor: {
      type: String,
      value: "#ddd"
    },
    highLightedColor: {
      type: String,
      value: "red"
    },
    startAngle: {
      type: Number,
      value: Math.PI/4*3
    },
    endAngle:{
      type: Number,
      value: Math.PI/4*9
    },
    progress: {
      type: Number,
      value: 0.5,
    },
    text: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ctx: '',
    canvasWidth: 0,
    canvasHeight: 0
  },

  ready() {
    const context = wx.createCanvasContext('circleprogress', this);
    this.setData({
      ctx: context
    })

    var that = this
    const obj = this.createSelectorQuery()
    obj.select('#circleprogress').boundingClientRect()
    obj.exec(function(rect) {
      that.setData({
        canvasWidth: rect[0].width,
        canvasHeight: rect[0].height
      })
      console.log(that.data.canvasWidth + '----' + that.data.canvasHeight)
      that.run('773')
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {
    run(c) {  
      const ctx = this.data.ctx
      //总进度
      const total = this.properties.endAngle - this.properties.startAngle
      var progress = this.properties.progress
      if (progress > 1) {
        progress = 1
      }
      if (progress < 0) {
        progress = 0
      }
      const percent = this.properties.startAngle + (total * progress)

      //圆环的绘制
      ctx.arc(100, 100, 100-this.properties.lineWidth, this.properties.startAngle, this.properties.endAngle) 
      ctx.setStrokeStyle(this.properties.normalColor); 
      ctx.setLineWidth(this.properties.lineWidth);	
      ctx.setLineCap("round");	//圆环结束断点的样式  butt为平直边缘 round为圆形线帽  square为正方形线帽
      ctx.stroke();

      ctx.beginPath()
      //圆环的绘制
      ctx.arc(100, 100, 100 - this.properties.lineWidth, this.properties.startAngle, percent)
      ctx.setStrokeStyle(this.properties.highLightedColor);
      ctx.setLineWidth(this.properties.lineWidth);
      ctx.setLineCap("round");	//圆环结束断点的样式  butt为平直边缘 round为圆形线帽  square为正方形线帽
      ctx.stroke();

      //开始绘制百分比数字
      var text = this.properties.text
      if (!text) {
        text = progress*100+'%'
      }
      ctx.beginPath();
      ctx.setFontSize(40); // 字体大小 注意不要加引号
      ctx.setFillStyle("#ff5000");	 // 字体颜色
      ctx.setTextAlign("center");	 // 字体位置
      ctx.setTextBaseline("middle");	 // 字体对齐方式
      ctx.fillText(text, 100, 100);	 // 文字内容和文字坐标
      ctx.draw();
    }
  }
})