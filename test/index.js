var test = require('tape');
var colordisc = require('../dist/');

test('colordisc', function (t) {
  t.plan(2);
  t.equal(typeof colordisc, 'function');
  t.throws(colordisc(null));
});
