# Security

## XSS Vulnerabilities

pocket-vue evaluates JavaScript expressions in the templates. This means **if** pocket-vue is mounted on a region of the DOM that contains non-sanitized HTML from user data, it may lead to XSS attacks.

**If your page renders user-submitted HTML, you should prefer initializing pocket-vue using [explicit mount target](/essentials/v-scope#explicit-mount-target) so that it only processes parts that are controlled by you**.

You can also sanitize any user-submitted HTML for the `v-scope` attribute.

## Content Security Policy (CSP)

pocket-vue evaluates expressions using `new Function()`, which may be prohibited in strict CSP settings.

There is no plan to provide a CSP build because it involves shipping an expression parser which defeats the purpose of being lightweight. If you have strict CSP requirements, you should probably use standard Vue and pre-compile the templates.
