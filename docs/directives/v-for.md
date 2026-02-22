# v-for

`v-for` is used to render a list of elements by iterating over an array or an object.

## Basic Usage

```html
<div v-scope="{ items: ['Apple', 'Banana', 'Cherry'] }">
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
</div>
```

---

## Array Iteration

### Accessing Index
You can access the current index by using the `(item, index)` syntax.

```html
<div v-for="(item, index) in items">
  {{ index + 1 }}. {{ item }}
</div>
```

### Array of Objects
Iteration works seamlessly with arrays of objects.

```html
<div v-for="user in users">
  <p>{{ user.name }} ({{ user.email }})</p>
</div>
```

---

## Object Iteration

`v-for` can also be used to iterate over the properties of an object. The order of iteration is consistent with `Object.keys()`.

```html
<div v-scope="{ myObject: { title: 'Guide', author: 'Jane', year: 2025 } }">
  <div v-for="(value, key, index) in myObject">
    {{ index }}. {{ key }}: {{ value }}
  </div>
</div>
```

---

## Iterating Over a Range

You can also use an integer with `v-for`. The count starts at `1`.

```html
<span v-for="n in 10">{{ n }} </span>
```

---

## Nested Loops

`v-for` can be nested to iterate over multi-dimensional data structures.

```html
<div v-for="category in categories">
  <h3>{{ category.name }}</h3>
  <ul>
    <li v-for="item in category.items">
      {{ item.name }}
    </li>
  </ul>
</div>
```

---

## Using `v-for` with `<template>`

Use a `<template>` tag if you need to repeat a block of multiple elements.

```html
<ul>
  <template v-for="item in items">
    <li class="item">{{ item.text }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

---

## Importance of `:key`

It is highly recommended to provide a unique `key` attribute for each item using `:key`. This allows pico-vue to efficiently track and reuse elements when the list changes.

```html
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```

Without a unique key, pico-vue will use a "patch in-place" strategy which can lead to unexpected behavior with stateful elements (like input fields) or CSS transitions.

---

## Limitations

- **Deep Destructuring**: pico-vue supports basic destructuring (e.g., `v-for="[id, name] in items"`) but does not support complex nested destructuring.
- **`v-for` with `v-if`**: Unlike standard Vue, `v-for` takes precedence over `v-if` in pico-vue when used on the same element. It's generally better to use a wrapper or filter the list in your scope.
