const promiseify = require('../lib')
const reader = require('./reader')

;(async () => {
  const p = promiseify(reader)
  debugger
  const data = await p()

  console.log(data)
})()
