# v-on

Attaches an event listener to the element.

## Shorthand

The `@` character is a shorthand for `v-on`.

```html
<!-- full syntax -->
<button v-on:click="doSomething"> ... </button>

<!-- shorthand -->
<button @click="doSomething"> ... </button>
```

## Usage

Inline handler:

```html
<button @click="count++">Add 1</button>
```

Method handler:

```html
<button @click="greet">Greet</button>
```

## Modifiers

- `.stop` - call `event.stopPropagation()`.
- `.prevent` - call `event.preventDefault()`.
- `.capture` - add event listener in capture mode.
- `.self` - only trigger handler if event was dispatched from this element.
- `.once` - trigger handler at most once.
- `.left` - only trigger handler for left button mouse events.
- `.right` - only trigger handler for right button mouse events.
- `.middle` - only trigger handler for middle button mouse events.
- `.passive` - attaches a DOM event with `{ passive: true }`.

```html
<!-- the click event's propagation will be stopped -->
<a @click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>
```

## Key Modifiers

```html
<!-- only call `submit` when the `key` is `Enter` -->
<input @keyup.enter="submit" />
```

## Accessing Original Event

In an inline handler, the original DOM event is available as `$event`.

```html
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
```

## Multiple Handlers

You can bind multiple methods in a comma-separated list.

```html
<button @click="one($event), two($event)">
  Submit
</button>
```
