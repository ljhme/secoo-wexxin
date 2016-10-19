Page({
  data:{
    indicatorDots:true,
    autoplay:true,
    interval:5000,
    duration:1000,
    homeData:[],
    loadingHidden: false,
    rush_rob_list:[],
    floor01:[],
    floor3:[],
    floor4:[],
    floor5:[],
    floor6:[],
    floor7:[],
    hotNamePro:[]
  },
  onLoad:function(){
    var that = this;
    wx.request({
      url:'http://lr.secooimg.com/home_page?askTime=1',
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        var aa = [];
        for(var i=0;i<res.data.floors.length;i++){
          aa.push(JSON.parse(res.data.floors[i].content));
        }
        console.log(aa);
        //console.log(JSON.parse(res.data.floors[0].content));
        that.setData({
          homeData:aa
        })
      },
      fail:function(error){
      console.log(error);
      }
    });
    wx.request({
      url:'http://lr.secooimg.com//luxuryGrabHui',
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        //console.log(res.data.rush_rob_list);
        that.setData({
          rush_rob_list:res.data.rush_rob_list
        })
      },
      fail:function(error){
      console.log(error);
      }
    });
    wx.request({
      url:'http://localhost/mock/home.json',
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        //console.log(res.data.floor01);
        that.setData({
          floor01:res.data.floor01,
          floor3:res.data.floor3,
          floor4:res.data.floor4,
          floor5:res.data.floor5,
          floor6:res.data.floor6,
          floor7:res.data.floor7
        })
      },
      fail:function(error){
      console.log(error);
      }
    });
    wx.request({
      url:'http://las.secoo.com//api//home//home_bottom?productType=1',
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        //console.log(res.data);
        that.setData({
          hotNamePro:res.data.productList
        })
      },
      fail:function(error){
      console.log(error);
      }
    });
  },
  newCustomer:function(){
    var that = this;
     wx.request({
      url:'http://las.secoo.com//api//home//home_bottom?productType=1',
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        //console.log(res.data);
        that.setData({
          hotNamePro:res.data.productList
        })
      },
      fail:function(error){
      console.log(error);
      }
    });
  },
  maleName:function(){
    var that = this;
     wx.request({
      url:'http:\/\/las.secoo.com\/api\/home\/home_bottom?productType=2',
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        //console.log(res.data);
        that.setData({
          hotNamePro:res.data.productList
        })
      },
      fail:function(error){
      console.log(error);
      }
    });
   },
 femaleName:function(){
    var that = this;
     wx.request({
      url:'http:\/\/las.secoo.com\/api\/home\/home_bottom?productType=3',
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        //console.log(res.data);
        that.setData({
          hotNamePro:res.data.productList
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