# v-for

Render the element or template block multiple times based on the source data.

## Usage

### Array

```html
<div v-scope="{ items: [{ message: 'Foo' }, { message: 'Bar' }] }">
  <div v-for="item in items">
    {{ item.message }}
  </div>
</div>
```

With index:

```html
<div v-for="(item, index) in items">
  {{ index }} - {{ item.message }}
</div>
```

### Object

```html
<div v-scope="{ myObject: { title: 'How to do lists in Vue', author: 'Jane Doe', publishedAt: '2016-04-10' } }">
  <div v-for="(value, key) in myObject">
    {{ key }}: {{ value }}
  </div>
</div>
```

### Range

You can also iterate over an integer:

```html
<span v-for="n in 10">{{ n }} </span>
```

### on `<template>`

Similar to `v-if`, you can also use a `<template>` tag to render a block of multiple elements.

```html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

## Key

It is recommended to provide a unique `key` attribute for each item with `:key`. This helps pocket-vue optimize rendering when the list changes.


```html
<div v-for="item in items" :key="item.id">
  <!-- content -->
</div>
```

## Limitations

In pocket-vue, `v-for` does not support deep destructuring in the alias expression (e.g. `v-for="{ id } in items"` is not supported).
