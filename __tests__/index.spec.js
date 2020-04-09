const promiseify = require('../lib')
const reader = require('./reader')

;(async () => {
  const p = promiseify(reader)
  const data = await p()

  console.log(data)
})()
