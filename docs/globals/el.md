# $el

Represents the current element that the directive is bound to.

## Usage

```html
<button @click="console.log($el)">
  Log Me
</button>
```

## Difference from standard Vue

In standard Vue, `$el` typically refers to the component's root element. In pico-vue, inside expressions, `$el` always points to the current element the directive is on.
