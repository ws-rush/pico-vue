# v-html

Updates the element's `innerHTML`.

## Usage

```html
<div v-html="rawHtml"></div>
```

## Security Note

Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to [XSS vulnerabilities](https://en.wikipedia.org/wiki/Cross-site_scripting). Only use `v-html` on trusted content and **never** on user-provided content.
