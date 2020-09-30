// components/bottomSheet/index.js

Component({
  properties: {

  },
  data: {
    flag: false,
    wrapAnimate: 'wrapAnimate',
    bgOpacity: 0,
    frameAnimate: 'frameAnimate',
  },
  ready() {
    
  },
  methods: {
    showFrame() {
      this.setData({
        flag: true,
        wrapAnimate: 'wrapAnimate',
        frameAnimate: 'frameAnimate'
      },()=>{
        this._showEvent()
      });
    },
    hideFrame() {
      this.setData({
        wrapAnimate: 'wrapAnimateOut',
        frameAnimate: 'frameAnimateOut'
      });
      setTimeout(() => {
        this.setData({
          flag: false
        },()=>{
          this._hideEvent()
        })
      }, 300)
    },
    _showEvent() {
      this.triggerEvent("showEvent");
    },
    _hideEvent() {
      this.triggerEvent("hideEvent");
    }
  }
})