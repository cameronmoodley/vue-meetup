const customPlugin = {
  install: function (Vue, options) {
    // 1. Add global method or properties
    Vue.myGlobalMethod = function () {
      alert('Global Method')
    }

    Vue.myCustomProperty = 'I am a custom property'

    // 2 Add global asset
    Vue.directive('blue-color', {
      bind(el, binding) {
        el.style.color = 'blue'
      },
      unbind() {}
    })

    //3. Inject component options mixins
    Vue.mixin({
      data() {
        return {
          custom_message: 'RAAAAAAAAWR'
        }
      },
      create() {
        console.log('Custom Mixin created')
      },
      methods: {
        scream() {
          alert('RAWWWWWWW')
        }
      }
    })

    //4. Add an instance method or property
    Vue.prototype.$customMethod = function () {
      alert('I am a custom instance method')
    }
  }
}

export default customPlugin
