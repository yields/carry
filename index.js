
/**
 * dependencies
 */

var merge = require('merge-attrs')
  , classes = require('classes')
  , uniq = require('uniq');

/**
 * Export `carry`
 */

module.exports = carry;

/**
 * Carry over attrs and classes
 * from `b` to `a`.
 *
 * @param {Element} a
 * @param {Element} b
 * @return {Element}
 * @api public
 */

function carry(a, b){
  if (!a) return b.cloneNode();
  carry.attrs(a, b);
  carry.classes(a, b);
  return a;
}

/**
 * Carry attributes.
 *
 * @param {Element} a
 * @param {Element} b
 * @return {Element} a
 * @api public
 */

carry.attrs = function(a, b){
  merge(a, b);
  return a;
};

/**
 * Carry over classes.
 *
 * @param {Element} a
 * @param {Element} b
 * @return {Element} a
 * @api public
 */

carry.classes = function(a, b){
  if (a.className == b.className) return a;
  var blist = classes(b).array();
  var alist = classes(a).array();
  var list = alist.concat(blist);
  a.className = uniq(list).join(' ');
  return a;
};
