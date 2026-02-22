# ref

Register a reference to an element or a component.

## Usage

```html
<div v-scope>
  <input ref="input">
  <button @click="$refs.input.focus()">
    Focus Input
  </button>
</div>
```

## Details

The `ref` attribute allows you to register a direct reference to a specific DOM element or child component instance. The reference will be accessible under the `$refs` object of the current scope.

Refs are populated after the component is mounted. They are not reactive, so you should not use them in templates for data binding.

## Accessing Components

If `ref` is used on a child component (an element with `v-scope`), the reference will be the component's scope object.

```html
<div v-scope="{ reset() { count = 0 } }" ref="counter">...</div>

<button @click="$refs.counter.reset()">Reset Counter</button>
```

