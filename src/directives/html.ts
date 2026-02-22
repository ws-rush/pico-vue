import { Directive } from './index'

export const html: Directive = ({ el, get, effect }) => {
  effect(() => {
    el.innerHTML = get()
  })
}
