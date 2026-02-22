# v-on

`v-on` is used to attach event listeners to elements. It supports both inline expressions and method calls from your scope.

## Shorthand

The `@` character is a shorthand for `v-on`.

```html
<!-- full syntax -->
<button v-on:click="doSomething">Click Me</button>

<!-- shorthand (preferred) -->
<button @click="doSomething">Click Me</button>
```

---

## Event Handlers

### Inline Handlers
You can write JavaScript expressions directly in the `@` directive.

```html
<button @click="count++">Increment: {{ count }}</button>
```

### Method Handlers
If the logic is complex, you should use a method defined in your `v-scope`.

```html
<div v-scope="{ greet(name) { alert('Hello ' + name) } }">
  <button @click="greet('User')">Greet</button>
</div>
```

---

## Accessing the Original Event

If you need the original DOM event object in an inline handler, you can pass the special `$event` variable.

```html
<button @click="handleClick($event)">Click Me</button>
```

If using a method handler, the event is automatically passed as the first argument if no arguments are provided in the template.

```html
<button @click="handleClick">Click Me</button>
<!-- handleClick(event) will be called -->
```

---

## Event Modifiers

Pico-vue provides modifiers to simplify common event handling tasks. Modifiers are postfixed with a dot.

- `.stop`: Calls `event.stopPropagation()`
- `.prevent`: Calls `event.preventDefault()`
- `.self`: Only triggers the handler if the event was dispatched from the element itself (not a child)
- `.once`: The handler will be triggered at most once
- `.capture`: Adds the listener in capture mode
- `.passive`: Adds the listener with `{ passive: true }`

```html
<!-- the click event's propagation will be stopped -->
<a @click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>
```

### Keyboard Modifiers
You can use any valid key name (in kebab-case) as a modifier for keyboard events.

```html
<!-- Only call `submit` when the `key` is `Enter` -->
<input @keyup.enter="submit">

<!-- Works with other keys too -->
<input @keyup.page-down="onPageDown">
```

### Mouse Button Modifiers
Restrict handlers to specific mouse buttons.

- `.left`
- `.right`
- `.middle`

```html
<button @click.right="showMenu">Right click for menu</button>
```

---

## Special Lifecycle Events

Pico-vue emits special events when an element is mounted or unmounted. These **must** be prefixed with `vue:`.

- `@vue:mounted`: Fired when the element is mounted to the DOM.
- `@vue:unmounted`: Fired when the element is removed from the DOM.

```html
<input @vue:mounted="$el.focus()">
```

