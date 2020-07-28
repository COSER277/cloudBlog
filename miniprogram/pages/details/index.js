// pages/details/index.js
import api from '../../utils/api/index'
const db = wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //模拟数据
    post:{
      // pid:"asdasdasdsad",
      // title:"VueJs开发路线",
      // background:"https://6465-dev-x8az2-1302738494.tcb.qcloud.la/bg.jpg?sign=0253e168b7dc6e9f4c3ae701b1767798&t=1595834742",//主图地址
      // content:"",//内容 一般使用md格式
      // views:3,//阅读次数
      // date:"2020-06-19"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("文章"+options.id)
    var that=this
    db.collection('blog').doc(options.id).get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          post:res.data
        })
      }
    })
    // api.getDetailPost(options.pid,()=>{})
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