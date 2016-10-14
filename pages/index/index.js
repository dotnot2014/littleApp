//index.js

//获取应用实例
var app = getApp()
Page({
  data: {
    tasks: [],
    tasksCount:0
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
      value:''
    })
  },
  // 更新任务状态
  checktap: function(e){
    var _id = e.target.id
    var _tasks = this.data.tasks
    _tasks[_id].finished = !_tasks[_id].finished;
    this.setData({
      tasks: _tasks
    })
  },
  // 数据初始化,从服务端读取json数据
  onLoad: function () {
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
  // 页面跳转
  jump_url: function(){
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
