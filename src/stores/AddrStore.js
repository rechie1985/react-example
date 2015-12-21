var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var LOADED_EVENT = 'loaded';

// 实时更新的数据
var _addrs = [];

// 更新_addrs
function setAll(data) {
  _addrs = data;
}

var AddrStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _addrs;
  },
  emitLoaded: function() {
    this.emit(LOADED_EVENT);
  },

  addLoadedListener: function(callback) {
    this.on(LOADED_EVENT, callback);
  },

  removeLoadedListener: function(callback) {
    this.removeListener(LOADED_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(action) {
    var addrs;
    // 根据不同的actionType进行处理
    switch(action.actionType) {
      case 'ADDR_LOADED':
        addrs = action.content;
        // 更新数据
        setAll(addrs);
        // 触发loaded事件
        AddrStore.emitLoaded();
        break;
    }

    return true;
  })

});

module.exports = AddrStore;
