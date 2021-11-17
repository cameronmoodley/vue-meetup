export default {
  bind(el, binding = 'Are you sure you want to continue') {
    const message = binding.value
    const color = binding.arg || 'blue'
    const { prevent } = binding.modifiers

    el.style.borderColor = color
    el.style.color = color

    el.__withWarning__ = () => {
      if (!prevent) alert(message)
    }

    el.addEventListener('click', el.__withWarning__)
  },
  unbind(el) {
    el.removeEventListener('click', el.__withWarning__)
  }
}
