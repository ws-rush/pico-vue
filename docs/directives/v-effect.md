# v-effect

Run a reactive side effect inline.

## Usage

```html
<div v-scope="{ count: 0 }">
  <div v-effect="$el.textContent = count"></div>
  <button @click="count++">++</button>
</div>
```

## Details

The expression inside `v-effect` is executed immediately, and re-executed whenever any reactive dependencies it accesses change.

This is useful for manually manipulating the DOM based on state, or integrating with third-party libraries that need to be updated when state changes.

Another example:

```html
<input v-effect="if (todo === editedTodo) $el.focus()" />
```

## Tips

- **Performance**: `v-effect` runs synchronously. Avoid expensive operations inside it.
- **Debugging**: You can use `console.log` inside `v-effect` to trace reactivity.

```html
<div v-effect="console.log('Count changed:', count)"></div>
```
