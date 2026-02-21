# Server Integration

pocket-vue shines when used with server-side frameworks like Laravel, Django, Rails, or Node.js (Express/Koa). Instead of building a Single Page Application (SPA), you can keep your routing and data fetching on the server and use pocket-vue to "sprinkle" interactivity.

## Data Injection

The most common pattern is injecting initial state directly from your server template into `v-scope`.

### Laravel Example

```blade
<div v-scope="{ 
    user: {{ Js::from($user) }},
    notifications: {{ Js::from($notifications) }}
}">
    <h1>Hello, @{{ user.name }}</h1>
    
    <div v-for="note in notifications">
        @{{ note.message }}
    </div>
</div>
```

> [!NOTE]
> Note the use of `@{{ }}` to escape Blade's mustache syntax so that pocket-vue can process it on the client.

### Django Example

```html
<div v-scope="{ 
    user: {{ user_json|safe }},
    items: {{ items_json|safe }}
}">
    <p>Welcome, {{ user.name }}</p>
</div>
```

## Handling CSRF Tokens

When making AJAX requests (e.g., using `fetch` or `axios`) from pocket-vue, you need to include the CSRF token.

### Option 1: Read from Meta Tag

Most frameworks include a meta tag with the CSRF token.

```html
<meta name="csrf-token" content="{{ csrf_token() }}">
```

You can read this in your pocket-vue component:

```js
const getToken = () => document.querySelector('meta[name="csrf-token"]').content

PocketVue.createApp({
    async submit() {
        await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': getToken()
            },
            body: JSON.stringify(this.data)
        })
    }
}).mount()
```

### Option 2: Pass in `v-scope`

You can also pass the token directly into the scope.

```html
<form v-scope="{ token: '{{ csrf_token() }}' }" @submit.prevent="submit">
    <input type="hidden" name="_token" :value="token">
    <!-- ... -->
</form>
```

## Progressive Enhancement

You can design your application to work without JavaScript first, and then enhance it with pocket-vue.

```html
<!-- Works without JS -->
<form action="/search" method="GET" v-scope @submit.prevent="ajaxSearch">
    <input name="q" type="search" v-model="query">
    <button>Search</button>
</form>

<script>
    function ajaxSearch() {
        // If JS is enabled, this runs instead of the standard form submission
        fetch('/api/search?q=' + this.query)
            .then(res => res.json())
            .then(results => {
                this.results = results
            })
    }
</script>
```
