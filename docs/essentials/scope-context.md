# Scope and Context

pico-vue uses a hierarchical scope system similar to JavaScript's lexical scoping. This allows components to inherit and share data efficiently.

## Scope Inheritance

When you nest `v-scope` directives, a new child scope is created that inherits from the parent scope.

<div v-pre>

```html
<div v-scope="{ outer: 'hello' }">
  <p>Outer: {{ outer }}</p>

  <div v-scope="{ inner: 'world' }">
    <!-- Child scope can access parent properties -->
    <p>Inner: {{ outer }} {{ inner }}</p>
  </div>
</div>
```

</div>

### Property Overriding

If a child scope defines a property with the same name as a parent property, it will "shadow" the parent property.

<div v-pre>

```html
<div v-scope="{ name: 'Parent' }">
  <div v-scope="{ name: 'Child' }">
    <p>{{ name }}</p> <!-- Displays 'Child' -->
  </div>
</div>
```

</div>

### Updating Parent State

When you assign a value to a property in a template, pico-vue will first check if the property exists on the current scope. If it doesn't, it will walk up the scope chain and update the property on the first parent scope where it finds it.

---

## Provide and Inject

pico-vue provides a simple `provide` and `inject` pattern for sharing data across multiple levels of nested components without manually passing props.

### `provide(key, value)`

You can provide data from a parent scope using the `provide` method on the application instance or within your component's setup.

```javascript
createApp({
  // Provide a reactive value to all descendants
  theme: 'dark'
}).mount()
```

### `inject(key)`

In pico-vue, `inject` is handled automatically through scope inheritance. Any property defined in a parent scope is implicitly "injected" into all child scopes.

---

## Accessing Component Instance

### `$el`

The current element the directive is bound to.

### `$root`

The root element of the application.

### `$data`

The current scope object.

### `$refs`

A collection of elements marked with the `ref` directive.
