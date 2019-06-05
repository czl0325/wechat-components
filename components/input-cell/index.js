// components/input-cell/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    unit:String,
    type:String,
    inputValue:String,
    disabled:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  attached() {
    if (!this.properties.type) {
      this.properties.type = 'text'
    }
    if (!this.properties.disabled) {
      this.properties.disabled = false
    }
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
