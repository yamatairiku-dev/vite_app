<script setup>
  import { h } from 'vue'
</script>

<script>
  export default {
    data() {
      return {
        title: 'HelloWorld',
        outputMessage: 'This is sample message.'
      }
    },
    render() {
      return h('div', {
        class: 'alert alert-info'
      },
      [
        h('h2', this.title),
        h('p', this.outputMessage)
      ])
    }
  }
</script>

