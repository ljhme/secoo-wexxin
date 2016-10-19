Page({
  data:{
      guessLikeData:[]
  },
  onLoad:function(options){
      var that = this;
      wx.request({
      url:'http://las.secoo.com//api//home//home_bottom?productType=1',
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        //console.log(res.data);
        that.setData({
          guessLikeData:res.data.productList
        })
      },
      fail:function(error){
      console.log(error);
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