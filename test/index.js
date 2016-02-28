var expect = require('chai').expect
var cp = require('child_process')

describe('main.js', function () {
  it('must print green, red and yellow logs', function(done){
    child = cp.exec('node main', function (error, output, errorOutput) {
      expect(errorOutput).to.equal('')
      expect(error).to.be.null
      output = output.replace('\n','')
      expect(output).to.contain('\x1b[32m')
      expect(output).to.contain('\033[31m')
      expect(output).to.contain('\x1b[0m')
      done()
    })
  })
})
