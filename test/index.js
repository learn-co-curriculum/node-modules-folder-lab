var test = require('tape'),
  cp = require('child_process')

test('node version', function (t) {
  t.plan(4)
  child = cp.exec('node main',
  function (error, stdout, stderr) {
    // console.log('stdout: ' + stdout)
    // console.log('stderr: ' + stderr)
    t.equal(stderr, '', 'No errors')
    if (error !== null) {
      console.log('exec error: ' + error)
    }
    stdout = stdout.replace('\n','')
    t.true(stdout.indexOf('\x1b[32m')>-1, 'Green color present')
    t.true(stdout.indexOf('\033[31m')>-1, 'Red color present')
    t.false(stdout.indexOf('\x1b[33m')>-1, 'Yellow color absent')
  })
})
