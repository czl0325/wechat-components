// components/imagetext/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon: String,
    text: String,
    itemId:String
  },

  data: {

  },

  methods: {
    onClickItem(event) {
      this.triggerEvent('click',{
        id: this.properties.itemId|0
      },{})
    }
  }
})
