Page({
  data:{
    // text:"这是一个页面"
  },
  onLoad:function(options){
    
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
  },
   gotoregister:function(){
    wx.redirectTo({
      url: '/pages/secoo/my/my'
    })
  },
  close:function(){
    wx.redirectTo({
      url: '/pages/secoo/my/my'
    })
  }
})