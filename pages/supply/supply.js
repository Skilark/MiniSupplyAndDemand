// pages/supply/supply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false, // 用于搜索框
    inputValue: ''  // 用于搜索框
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },

  /**
   * 方法
   */
  // 点击搜索按钮
  handleSearch: function(){
    console.log("点击搜索按钮");
  },
  // 点击复习资料图标
  handleReviewClick: function(){
    console.log("点击复习资料按钮");
    wx.navigateTo({
      url: '../../pages/categories/review/review',
      success: function (res) { console.log(res) },
      fail: function (res) { console.log(res) },
      complete: function (res) { console.log(res) },
    })
  },
  // 点击教辅教材图标
  handleTextbookClick: function () {
    console.log("点击教辅教材按钮");
    wx.navigateTo({
      url: '../../pages/categories/textbook/textbook',
      success: function (res) { console.log(res) },
      fail: function (res) { console.log(res) },
      complete: function (res) { console.log(res) },
    })
  },
  // 点击电器图标
  handleElectricalClick: function () {
    console.log("点击电器按钮");
    wx.navigateTo({
      url: '../../pages/categories/machine/machine',
      success: function (res) { console.log(res) },
      fail: function (res) { console.log(res) },
      complete: function (res) { console.log(res) },
    })
  },
  // 点击其他图标
  handleOthersClick: function () {
    console.log("点击其他按钮");
    wx.navigateTo({
      url: '../../pages/categories/others/others',
      success: function (res) { console.log(res) },
      fail: function (res) { console.log(res) },
      complete: function (res) { console.log(res) },
    })
  },
  // 点击某个商品进入详情页
  handleGoodClick: function(){
    console.log("点击某商品查看详情");
    wx.navigateTo({
      url: '../supply/supplydetails',
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