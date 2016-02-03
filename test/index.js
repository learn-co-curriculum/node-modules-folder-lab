var test = require('tape'),
  cp = require('child_process')

test('node version', function (t) {
  t.plan(3)
  t.equal(process.versions.node, '5.1.0')
  child = cp.exec('node main',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout)
    console.log('stderr: ' + stderr)
    t.equal(stderr, '')
    if (error !== null) {
      console.log('exec error: ' + error)
    }
    stdout = stdout.replace('\n','')
    t.equal(stdout.indexOf('\x1b[32m')>-1, true)
  })
})
