# v-model

Create a two-way binding on a form input element or a component.

## Usage

### Text Input

```html
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

### Checkbox

Single checkbox, boolean value:

```html
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```

Multiple checkboxes, bound to the same array:

```html
<div v-scope="{ checkedNames: [] }">
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>

  <p>Checked names: {{ checkedNames }}</p>
</div>
```

### Radio

```html
<div v-scope="{ picked: '' }">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>

  <p>Picked: {{ picked }}</p>
</div>
```

### Select

```html
<div v-scope="{ selected: '' }">
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <p>Selected: {{ selected }}</p>
</div>
```

## Modifiers

- `.lazy`: listen to `change` events instead of `input`
- `.number`: cast valid input string to numbers
- `.trim`: trim input

```html
<input v-model.lazy="msg">
<input v-model.number="age" type="number">
<input v-model.trim="msg">
```
