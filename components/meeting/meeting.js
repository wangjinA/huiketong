// components/meeting/meeting.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    addGlobalClass: true,
  },
  properties: {
    showSelect: {
      type: Boolean,
      value: false
    },
    data: Object
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
    handlerClick(e) {
      this.triggerEvent('click', e)
    }
  }
})
