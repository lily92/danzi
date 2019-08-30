import load from '@/helper/load'

/**
 * {detail:{origin, destination, direction}}
 */
export default {
  bind(el, { value }) {
    load([
      '/js/baguetteBox.min.js',
      '/css/baguetteBox.min.css',
    ], 'buguettebox').then(() => {
      const baguetteBox = window.baguetteBox
      const key = 'baguetteBox-' + Math.random().toString(36).substr(2)
      el.setAttribute('id', key)
      baguetteBox.run('#' + key, {
        ...value,
      })

      el.dispatchEvent(new CustomEvent('ready'))
    })
  },
  componentUpdated(el, { value }) {
    const baguetteBox = window.baguetteBox
    // baguetteBox.destroy()

    baguetteBox.run('#' + el.getAttribute('id'), {
      ...value,
    })
  },
}
