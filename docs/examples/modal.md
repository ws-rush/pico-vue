# Modal Component

A reusable modal component that handles opening, closing, and clicking outside.

## Example Code

```html
<div v-scope="{ showModal: false }">
  <button @click="showModal = true">Show Modal</button>

  <div class="modal-mask" v-if="showModal" @click="showModal = false">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <h3>Modal Header</h3>
      </div>

      <div class="modal-body">
        <p>Click the mask or the button to close.</p>
      </div>

      <div class="modal-footer">
        <button class="modal-default-button" @click="showModal = false">
          OK
        </button>
      </div>
    </div>
  </div>
</div>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
</style>
```

## Key Features

1.  **Click Outside**: We add `@click="showModal = false"` to the mask to close the modal when clicking outside.
2.  **Stop Propagation**: We add `@click.stop` to the container to prevent clicks inside the modal from closing it.
