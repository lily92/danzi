import load from '@/helper/load'

/**
 * {detail:{origin, destination, direction}}
 */
export default {
  bind(el, { value }) {
    load([
      '/js/fullpage.min.js',
      '/js/fullpage.extensions.min.js',
      '/css/fullpage.min.css',
    ], 'fullpage').then(() => {
      const FullPage = window.fullpage
      el.$fullpage = new FullPage(el, {
        ...value,

        // 事件
        onLeave(origin, destination, direction) {
          el.dispatchEvent(new CustomEvent('onLeave', {
            detail: { origin, destination, direction },
          }))
        },
        afterLoad(origin, destination, direction) {
          el.dispatchEvent(new CustomEvent('afterLoad', {
            detail: { origin, destination, direction },
          }))
        },
        afterRender() {
          el.dispatchEvent(new CustomEvent('afterRender'))
        },
        afterResize(width, height) {
          el.dispatchEvent(new CustomEvent('afterResize', {
            detail: { width, height },
          }))
        },
        afterResponsive(isResponsive) {
          el.dispatchEvent(new CustomEvent('afterResponsive', {
            detail: { isResponsive },
          }))
        },
        afterSlideLoad(section, origin, destination, direction) {
          el.dispatchEvent(new CustomEvent('afterSlideLoad', {
            detail: { section, origin, destination, direction },
          }))
        },
        onSlideLeave(section, origin, destination, direction) {
          el.dispatchEvent(new CustomEvent('onSlideLeave', {
            detail: { section, origin, destination, direction },
          }))
        },
      })

      el.dispatchEvent(new CustomEvent('ready'))
    })
  },
  unbind(el) {
    if (el.$fullpage) {
      el.$fullpage.destroy('all')
    }
  },
}
