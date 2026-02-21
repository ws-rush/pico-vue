# v-if

Conditionally render an element or a template fragment based on the truthiness of the expression value.

## Usage

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else>
  Not A/B
</div>
```

## Details

When `v-if` is toggled, the element and its contained directives / components are destroyed and re-constructed. If the initial condition is false, the inner content is not processed at all.

For elements that are toggled very frequently, prefer `v-show`.
