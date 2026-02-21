# Reactivity APIs

pocket-vue uses the same core reactivity system as standard Vue. This includes `ref()`, `reactive()`, `computed()`, and `watchEffect()`.

## Usage

When using the CDN build, these APIs are available on the global `PocketVue` object.

```html
<script src="https://unpkg.com/pocket-vue"></script>
<script>
  const { reactive, ref, computed, watchEffect } = PocketVue
</script>
```

When using the ES module build, you can import them from `pocket-vue`.

```javascript
import { reactive, ref, computed, watchEffect } from 'pocket-vue'
```

---

## API Reference

### `reactive(object)`

Returns a reactive proxy of the given object. This is typically used for defining the initial state of your application.

```javascript
const state = reactive({ count: 0 })
```

### `ref(value)`

Returns a reactive, mutable ref object with a single property `.value` that points to the internal value.

```javascript
const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1
```

### `computed(getter)`

Returns a read-only reactive ref object whose `.value` is the return value of the getter function. It automatically tracks dependencies and updates when they change.

```javascript
const count = ref(0)
const double = computed(() => count.value * 2)
```

### `watchEffect(effect)`

Runs a function immediately while reactively tracking its dependencies and re-runs it whenever the dependencies change.

```javascript
const count = ref(0)
watchEffect(() => console.log(count.value)) // prints 0
count.value++ // prints 1
```

---

## Best Practices

- **Use `reactive` for state objects**: This is the most common pattern for defining your application state.
- **Use `ref` for primitive values**: Use `ref` for single values like strings, numbers, or booleans.
- **Always access `.value` on refs**: Remember that refs are objects and you must use the `.value` property to access or modify their content in JavaScript code.
- **No `.value` needed in templates**: pocket-vue automatically unwraps refs in your templates, so you can just use `{{ count }}` instead of `{{ count.value }}`.
