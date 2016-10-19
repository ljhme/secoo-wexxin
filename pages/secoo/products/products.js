Page({
  data:{
    loadingHidden: false,
    refreshHidden: true,
    loadmoreHidden: true,
    mainData:[],
    indexpage:3
  },
  onLoad:function(options){
    var that = this;
    wx.request({
      url:'http://lr.secooimg.com/specialtopic_ku?currpage=1&pagesize=10&_=1476605889586&callback',
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        // console.log(res.data.topickus);
        // that.setData({
        //   mainData:res.data.topickus
        // })


        setTimeout(function () {
          that.setData({
            mainData:res.data.topickus,
            loadingHidden: true
          });
        }, 1000);
      },
      fail:function(error){
      console.log(error);
      }
    });
  },
  actionToupper: function () {
    var that = this;
    this.setData({
      refreshHidden: false
    });
    wx.request({
      url: 'http://lr.secooimg.com/specialtopic_ku?currpage=2&pagesize=20&_=1476605889586&callback',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            mainData:res.data.topickus,
            refreshHidden: true
          });
        }, 1500);
      }
    });
  },

  onPullDownRefresh: function () {
    console.log(0);
  },

  actionTolower: function () {
    var that = this;
    this.setData({
      loadmoreHidden: false
    });
    wx.request({
      url: 'http://lr.secooimg.com/specialtopic_ku?currpage=5&pagesize=5&_=1476605889586&callback',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            mainData: that.data.mainData.concat(res.data.topickus),
            loadmoreHidden: true
          });
        }, 1500);
      }
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})