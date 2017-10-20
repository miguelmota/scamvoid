const test = require('tape')
const scamvoidStats = require('../')

test('scamVoidStats', t => {
  t.plan(8)

  const domain = 'github.com'

  scamvoidStats(domain)
  .then(data => {
    console.log(JSON.stringify(data, null, 2))
    t.equal(data.domain, domain)
    t.ok(data.verdict)
    t.ok(data.wot)
    t.ok(data.blacklist)
    t.ok(data.popularity)
    t.ok(data.creation)
    t.ok(data.https)
    t.ok(data.hostingProvider)
  })
  .catch(error => {
    console.error(error)
  })
})
