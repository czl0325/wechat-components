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


### 普通cell  （左侧文字+右侧文字）

|properties    |  类型         |    属性 |  默认值|
|--------------|   -----------|  ------ | -----|
|icon	|	String	|  	左侧图标 | null|
|title	|	String	|  	左侧文字 | null|
|detail	|	String	|  	右侧文字 | null|
|hideArrow	|	Boolean	|  	是否隐藏向右箭头 | false|
|itemId	|	String	|  	id | null|
|hasPicker	|	Boolean	|  	是否为单行picker | false|
|pickArray	|	Array	|  	用于单行picker的数组 | null|
|datePicker	|	Boolean	|  	是否为日期picker | false|
|date	|	String	|  	用于日期pickerview的value | null|
|multiPicker	|	Boolean	|  	是否为多行picker | false|
|multiArray	|	Array	|  	多行pickerview的数组 | null|
|multiIndex	|	Array	|  	多行pickerview的index数组 | null|
|multiText	|	String	|  	多行pickerview展示的值 | null|




