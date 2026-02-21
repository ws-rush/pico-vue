# $data

Represents the current data scope object.

## Usage

```html
<div v-scope="{ msg: 'hello' }">
  <button @click="console.log($data)">
    Log Data
  </button>
</div>
```

This is useful when you want to pass the entire scope to a function, or debug the current state.
