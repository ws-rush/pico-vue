# v-text

Updates the element's text content.

## Usage

```html
<span v-text="msg"></span>
<!-- same as -->
<span>{{ msg }}</span>
```

## Details

`v-text` works by setting the element's `textContent` property, so it will overwrite any existing content inside the element. If you need to update a part of `textContent`, you should use mustache interpolations instead.
