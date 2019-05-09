// components/input-cell/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    unit:String
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
    onInputChange(event) {
      this.triggerEvent('onInput',{
        text:event.detail.value
      },{})
    }
  }
})
