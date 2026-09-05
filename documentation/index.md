# Pocket Vue

![pocket-vue logo](./assets/logo.jpg)

**Progressive Enhancement for the Modern Web**

A lightweight, Vue-compatible library optimized for "sprinkling" interactions on server-rendered pages (Django, Laravel, Rails, and more).

[Get Started](./start-here/installation.md) · [API Reference](./essentials/api-reference.md) · [Examples](./examples/index.md) · [GitHub](https://github.com/ws-rush/pocket-vue)

## Features

- **Ultra Lightweight** — Only ~9kb gzipped. No build step required. Just drop it in and go. Perfect for "sprinkling" on existing pages.
- **Progressive First** — Designed specifically for progressive enhancement. Layer on interactivity without rewriting your server-rendered HTML.
- **Vue Compatible** — Uses the same template syntax and reactivity system as standard Vue. Leverage your existing Vue knowledge.
- **Framework Friendly** — Works seamlessly with Django, Rails, Laravel, and ASP.NET. Replace complex jQuery or vanilla JS with ease.

## Why pocket-vue?

pocket-vue is a fork of petite-vue, providing a modern, maintained solution for developers who want the power of Vue's reactivity without the overhead of a full Single Page Application (SPA).

```html
<!-- No build step required! -->
<script src="https://unpkg.com/pocket-vue" defer init></script>

<div v-scope="{ count: 0 }">
  {{ count }}
  <button @click="count++">Increment</button>
</div>
```
