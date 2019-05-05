# wechat-components
自己写的一些微信小程序的自定义组件，目前完成圆环进度条，手写签名版功能

![](https://github.com/czl0325/wechat-components/blob/master/demo.gif?raw=true)

### 圆环进度条

|properties    |  类型         |    属性 |  默认值|
|--------------|   -----------|  ------ | -----|
|lineWidth	|	Number	|  	线条的宽度 | 8|
|normalColor	|	String	|  	进度条底色 | #ddd|
|highLightedColor	|	String	|  	进度条高亮颜色 | red|
|startAngle	|	Number	|  	起始角度 | Math.PI/4*3|
|endAngle	|	Number	|  	结束角度 | Math.PI/4*9|
|progress	|	Number	|  	进度(0~1) | 0.5|
|text	|	String	|  	进度文字 | null|



### 手写签名板


直接引入，回调方法为saveImage(path),path为签名版图片保存路径




