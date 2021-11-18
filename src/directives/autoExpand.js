export default {
  bind(el) {
    el.__AutoResizer__ = () => {
      // This tells the browser to render things first on the page
      // Before it executes your javascript in the callback
      // It helps from blocking rendering
      setTimeout(() => {
        el.style.cssText = 'height: auto'
        const height = el.scrollHeight + 2
        el.style.cssText = 'height: ' + height + 'px'
      }, 0)
    }

    el.addEventListener('keydown', el.__AutoResizer__)
  },
  unbind(el) {
    el.removeEventListener('keydown', el.__AutoResizer__)
  }
}
