# v-bind

Dynamically bind one or more attributes, or a component prop to an expression.

## Shorthand

The `:` character is a shorthand for `v-bind`.

```html
<!-- full syntax -->
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```

## Class Binding

You can pass an object to `:class` to dynamically toggle classes:

```html
<div :class="{ active: isActive }"></div>
```

You can also pass an array to apply a list of classes:

```html
<div :class="[activeClass, errorClass]"></div>
```

## Boolean Attributes

If the bound value is `null`, `undefined`, or `false`, the attribute will be removed. If it is `true`, the attribute will be present.

```html
<button :disabled="isFormInvalid">Submit</button>
```

## Style Binding

You can pass an object to `:style`:

```html
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

You can also use an array of style objects:

```html
<div :style="[baseStyles, overridingStyles]"></div>
```

## Modifiers

- `.camel`: convert the attribute name to camelCase.

```html
<svg :view-box.camel="viewBox"></svg>
```
