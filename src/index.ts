export { createApp } from './app'
export { nextTick } from './scheduler'
export { reactive, effect as watchEffect } from '@vue/reactivity'

import { createApp } from './app'

export const autoMount = (): void => {
  const s = document.currentScript
  if (s?.hasAttribute('init')) {
    createApp().mount()
  }
}

autoMount()
