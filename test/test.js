
describe('carry', function(){

  var a = document.createElement('a')
    , assert = require('assert')
    , carry = require('carry');

  it('(a, b)', function(){
    var o = a.cloneNode();
    var t = a.cloneNode();

    o.setAttribute('a', '');
    o.setAttribute('b', '');
    t.setAttribute('b', 'b');
    t.setAttribute('c', '');
    t.className = 'foo baz bar a';
    o.className = 'a b';
    carry(t, o);

    assert('b' == t.getAttribute('b'));
    assert('' == t.getAttribute('c'));
    assert(4 == t.attributes.length);
    assert('foo baz bar a b' == t.className);
  })

})
