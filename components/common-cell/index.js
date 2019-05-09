// components/tablecell/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon:String,        //左侧图标
    title:String,       //左侧文字
    detail:String,      //右侧文字
    hideArrow:Boolean,  //是否隐藏向右箭头
    itemId:String       //Id
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickItem(event) {
      this.triggerEvent('click', {
        id: this.properties.itemId | 0
      }, {})
    }
  }
})
