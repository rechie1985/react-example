
var AppDispatcher = require('../dispatcher/AppDispatcher');

var AddrAction = {
  // ajax获取地址列表
  loadFromServer: function() {
    $.ajax({
      url: '../api/addr_list.json',
      dataType: 'json',
      success: function(data) {
        // 模拟延迟
        setTimeout(function() {
          // 加载成功后，触发dispatch()
          // 通知Store来对数据做相应的处理
          AppDispatcher.dispatch({
            actionType: 'ADDR_LOADED',
            content: data.content
          });
        }, 5000);
      },
      error: function(err){
        console.log('AddrAction.getAll from server error');
      }
    });
  }
};
module.exports = AddrAction;
