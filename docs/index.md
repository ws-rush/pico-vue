---
layout: home

hero:
  name: "Pocket Vue"
  image: { src: '/logo.png', alt: 'pocket-vue logo' }
  text: "Progressive Enhancement for the Modern Web"
  tagline: A lightweight, Vue-compatible library optimized for sprinkling interactions on server-rendered pages.
  actions:
    - theme: brand
      text: Get Started
      link: /start-here/installation
    - theme: alt
      text: View on GitHub
      link: https://github.com/ws-rush/pocket-vue

features:
  - title: Ultra Lightweight
    details: Only ~9kb gzipped. No build step required. Just drop it in and go.
  - title: Easy to Learn
    details: It is easy to learn as it contains only 16 directives and 5 magic properties.
  - title: Vue Compatible
    details: Uses the same template syntax and reactivity system as standard Vue.
  - title: Progressive
    details: Optimized for "sprinkling" interactions on existing HTML pages.
---

<div style="text-align: center; margin-top: 40px;">

## Simple Usage

```html
<script src="https://unpkg.com/pocket-vue" defer init></script>

<div v-scope="{ count: 0 }">
  {{ count }}
  <button @click="count++">Increment</button>
</div>
```

</div>
