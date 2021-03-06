const app = getApp();
import { deepClone } from "../../../utils/util";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formLists: [],
    activeNames: [0],
    list: [],
    nextText: '',
    meetingIndex: 0
  },
  copyPrev(e) {
    const {
      index
    } = e.target.dataset
    const wjForms = this.selectAllComponents('#wjForm')
    let prevCom = wjForms[index - 1]
    let com = wjForms[index]
    let tag = true
    com.data.formList.forEach(item => {
      let comFormData = com.data.formData
      let xdItem = prevCom.data.formList.filter(_item => _item.label == item.label)[0]
      if(xdItem){
        let data = prevCom.data.formData[xdItem.key]
        if(data){
          comFormData[item.key] = data
          tag = false
        }
      }
    })
    if(tag){
      console.log('数据不匹配，无法复制') 
    }
    com.setData({
      formData: com.data.formData,
      // formList: deepClone(prevCom.data.formList)
    })
  },
  onChange(event) {
    console.log(event)
    this.setData({
      activeNames: event.detail,
    });
  },
  async next() {
    let forms = this.selectAllComponents('#wjForm')
    let kfbj = []
    for (let i = 0; i < forms.length; i++) {
      const formItem = forms[i];
      try {
        kfbj.push({
          ...(await formItem.getData()),
          dates: this.data.list[i].dates
        })
      } catch (error) {
        return false
      }
    }
    wx.kfbj = kfbj

    if (wx.cyShow) {
      wx.navigateTo({
        url: '/pages/quote/eatQuote/eatQuote',
      })
    } else {
      wx.navigateTo({
        url: '/pages/quote/otherRemark/otherRemark',
      })
    }
  },
  onLoad: function (options) {

  },

  onReady: function () {
    // this.data.formList = [{
    //   label: '可提供房间数',
    //   key: 'guestNumber',
    //   required: true,
    //   inputType: 'number',
    //   required: true,
    //   company: '间'
    // }, {
    //   label: '报价',
    //   key: 'price',
    //   inputType: 'number',
    //   required: true,
    //   company: '元/间'
    // }]
    wx.singleDemandRoomsVos.forEach((warp, i) => {
      let target = []
      this.data.formLists[i] = target
      warp.rooms.forEach((item, index) => {
        target.push({
          label: `${item.name}`,
          key: 'guestNumber' + index,
          required: true,
          inputType: 'number',
          placeholder: '可提供数量',
          required: true,
          company: '间'
        })
        target.push({
          label: `${item.name} 报价`,
          key: 'price' + index,
          inputType: 'number',
          placeholder: `${item.name}价格`,
          required: true,
          company: '元/间'
        })
      })

    })
    this.setData({
      formLists: this.data.formLists,
      list: wx.singleDemandRoomsVos,
      nextText: wx.cyShow ? '餐饮报价' : '其他说明'
    })

  },
  closePopup() {
    this.setData({
      showPopup: false
    })
  },
  meetingClick(e) {
    const {
      index
    } = e.currentTarget.dataset
    this.setData({
      meetingIndex: index,
      showPopup: false
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})