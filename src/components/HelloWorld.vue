<template>
  <div class="alert alert-primary">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <button class="btn btn-primary m-3" v-on:click="doAction">
      {{ btn }}
    </button>
    <transition name="transit">
      <p v-if="flg" class="alert alert-light h5 trans">
        Transition!
      </p>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        title: 'Trans&Anim',
        message: 'Transition sample!',
        flg: true,
        btn: 'Show/Hide'
      }
    },
    methods: {
      doAction() {
        this.flg = !this.flg
      }
    }
  }
</script>

<style>
.trans {
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 20px;
}
.transit-enter-active {
  transition: 1.0s;
}
.transit-leave-active {
  transition: 1.0s;
}
.trasit-enter, .transit-leave-to {
  transform: translateX(200px) translateY(-200px);
  opacity: 0.1;
}
</style>