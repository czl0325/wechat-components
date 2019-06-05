// components/tablecell/index.js

Component({
  externalClasses: [
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
    datePicker: {
      type: Boolean,
      value: false
    },
    multiPicker: {
      type: Boolean,
      value: false
    },
    date:String,
    pickArray:Array,
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
        id: this.properties.itemId | 0
      }, {})
    },
    bindDateChange: function (e) {
      this.triggerEvent('dateChanged',{
        date: e.detail.value
      },{})
    },
    bindMultiPickerColumnChange: function(e) {
      this.triggerEvent('mutilChanged',{
        column: e.detail.column,
        value: e.detail.value
      },{}) 
    }
  }
})
