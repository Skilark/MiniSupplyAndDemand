// pages/mythings/mydemand/mydemand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 方法
   */
  handleSendBtnClick: function () {
    console.log("releasedemand");
    wx.navigateTo({
      url: '../../../pages/release/releasedemand/releasedemand',
      success: function (res) { console.log(res) },
      fail: function (res) { console.log(res) },
      complete: function (res) { console.log(res) },
    })
  },
  removeBtnClick: function () {
    console.log("点击下架按钮");
    wx.showModal({
      title: '下架提示',
      content: '是否下架此商品？',
      success: function (res) {
        if (res.confirm) {
          console.log("下架");
        }
        if (res.cancel) {
          console.log("取消");
        }
      }
    })
  },
  editBtnClick: function () {
    console.log("点击编辑按钮，跳转到编辑页面,releasedemand,将商品参数传过去");
    wx.navigateTo({
      url: '../../../pages/release/releasedemand/releasedemand',
      success: function (res) { console.log(res) },
      fail: function (res) { console.log(res) },
      complete: function (res) { console.log(res) },
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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