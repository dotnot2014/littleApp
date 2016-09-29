//index.js

//获取应用实例
var app = getApp()
Page({
  data: {
    tasks: [
        {
            task:"这是第一条任务",
            finished:true
        },
        {
            task:"这是第二条任务",
            finished:true
        },      
        {
            task:"这是第三条任务",
            finished:true
        }
    ],
    focus: false
  },
  //添加一条新任务
  addTask: function(e) {
    var myTasks = this.data.tasks;
    var newtask = {}
    newtask.task = e.detail.value.title
    newtask.finished = false
    var tasksCount = myTasks.push(newtask)
    this.setData({
      tasks: myTasks,
      focus: true
    })
  },
  checkboxChange: function(e){
    console.log(e.detail.value)
  },
  onLoad: function () {
    // 从本地数据存储读取数据
  },
  jump_url: function(){
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
