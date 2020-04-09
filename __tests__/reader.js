function reader(callback) {
  setTimeout(function() {
    callback && callback(null, 'msg')
  }, 5e2)
}

module.exports = reader
