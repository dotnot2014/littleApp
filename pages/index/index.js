//index.js

//获取应用实例
var app = getApp()
Page({
  data: {
    tasks: [],
    tasksCount:0,
    focus: false,
    style: 'notfinished_task'
  },
  //添加一条新任务
  addTask: function(e) {
    var _tasks = this.data.tasks;
    var newtask = {}
    newtask.task = e.detail.value.title
    newtask.finished = false
    var _tasksCount = _tasks.push(newtask)
    this.setData({
      tasks: _tasks,
      tasksCount:_tasksCount,
      focus: true
    })
  },
  checkboxChange: function(e){
    console.log(e.detail.value)
  },
  onLoad: function () {
    // 从本地数据存储读取数据
    var that = this
    wx.request({
      url: 'http://localhost:63342/vueglance/tasks.json',
      data: {},
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
            tasks: res.data.tasks,
            tasksCount:res.data.tasks.length
          })
      }
    })
  },
  jump_url: function(){
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
