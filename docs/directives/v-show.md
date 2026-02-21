# v-show

Toggles the element's visibility based on the truthiness of the expression value.

## Usage

```html
<h1 v-show="ok">Hello!</h1>
```

## Details

`v-show` works by setting the `display` CSS property via inline styles. The element remains in the DOM.

Unlike `v-if`, `v-show` does not support the `<template>` element, and does not work with `v-else`.
