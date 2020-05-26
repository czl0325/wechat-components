// components/tablecell/index.js

Component({
  externalClasses: [
    'cell_class',
    'icon_class',
    'detail_class'
  ],
  /**
   * 组件的属性列表
   */
  properties: {
    icon:String,        //左侧图标
    title:String,       //左侧文字
    detail:String,      //右侧文字
    hideArrow:Boolean,  //是否隐藏向右箭头
    itemId:String,       //Id
    hasPicker: { 
      type: Boolean,
      value: false
    },
    pickArray: Array,
    range_key: String,
    datePicker: {
      type: Boolean,
      value: false
    },
    date: String,
    multiPicker: {
      type: Boolean,
      value: false
    },
    multiText:String,
    multiArray:Array,
    multiIndex:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    index: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickItem(event) {
      this.triggerEvent('click', {
        id: this.properties.itemId || 0
      }, {})
    },
    bindPickerChange(event) {
      this.triggerEvent('pickerChanged', {
        value: event.detail.value,
        itemId: this.properties.itemId || ""
      }, {})
    },
    bindDateChange(event) {
      this.triggerEvent('dateChanged',{
        date: event.detail.value,
        itemId: this.properties.itemId || ""
      },{})
    },
    bindMultiPickerColumnChange(event) {
      this.triggerEvent('mutilChanged',{
        column: event.detail.column,
        value: event.detail.value,
        itemId: this.properties.itemId || ""
      },{}) 
    }
  }
})
