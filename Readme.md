
# carry

  Carry attrs, classes from one element to another.

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/carry

## Example

```js

function Widget(el){
  this.el = carry(el, tpl.cloneNode());
}

new Widget;
new Widget(el);

```

## API

#### carry(a, b)

  if `a` is `null` a clone of `b` will be returned.
  otherwise `b`'s attrs and classes are merged with `a`,
  returning `a`.

#### .attrs(a, b)

Carry over attributes from `b` to `a`.

#### .classes(a, b)

Carry over classes from `b` to `a`.

## License

  MIT
