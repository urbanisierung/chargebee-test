// eslint-disable-next-line id-length
global.td = require('testdouble')
global.expect = require('expect')

require('testdouble-jest')(td, jest)

afterEach(() => {
  td.reset()
})
