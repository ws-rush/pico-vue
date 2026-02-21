# Quick Start

Let's build a simple counter component to see how pocket-vue works.

## Basic Example

```html
<script src="https://unpkg.com/pocket-vue" defer init></script>

<div v-scope="{ count: 0 }">
  <button @click="count--">-</button>
  <span>{{ count }}</span>
  <button @click="count++">+</button>
</div>
```

## Interactive Example: Toggle

Here is a common pattern: toggling visibility of an element.

```html
<div v-scope="{ open: false }">
  <button @click="open = !open">
    {{ open ? 'Close' : 'Open' }} Content
  </button>

  <div v-show="open" class="content">
    <p>This content is toggled!</p>
  </div>
</div>
```

## Why pocket-vue?

pocket-vue is designed for **Progressive Enhancement**. This means you can take an existing static HTML page rendered by your server (Django, Laravel, Rails, Node, etc.) and "sprinkle" interactivity onto it without rewriting the entire frontend in a complex framework.

Unlike standard Vue or React, you don't need a build step, and you don't need to manage a virtual DOM. pocket-vue works directly with the real DOM.

## How it works

1. **Load the script**: The `<script>` tag loads pocket-vue from a CDN. The `defer` attribute ensures it runs after the HTML is parsed. The `init` attribute tells it to automatically find and mount components.

2. **Define Scope**: `v-scope="{ count: 0 }"` marks the `<div>` as a component and initializes its state with `count` set to 0.

3. **Bind Events**: `@click="count--"` and `@click="count++"` are event listeners that modify the state.

4. **Display Data**: `{{ count }}` displays the current value of `count`.

## Next Steps

- Learn more about [v-scope](/essentials/v-scope)
- Explore [Directives](/directives/v-bind)
- See [Examples](/examples/)
