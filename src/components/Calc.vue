<script setup>
  defineProps({
    title: String
  })
</script>

<template>
  <div class="card alert-primary">
    <div class="card-body text-left">
      <h2 class="card-title text-center">{{ title }}</h2>
      <p class="card-text h5">{{ message }}</p>
      <hr>
      <div>
        <div class="form-group">
          <label for="userInput">Formula:</label>
          <textarea class="form-control mb-2" v-model="formula" name="userInput" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="text-center">
          <button class="btn btn-primary" v-on:click="doAction">Calc</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Enter expression:',
        formula: ''
      }
    },
    methods: {
      doAction() {
        if (this.formula === '') {
          return
        }
        let arr = this.formula.trim().split('\n')
        let re = arr.join(';')
        console.log(re)
        let last = arr.pop()
        let fn = ''
        for (const element of arr) {
          if (element.trim() != '') {
            fn += `let ${element};`
          }
        }
        fn += `return ${last};`
        let exp = `(function (){${fn}})();`
        let ans = eval(exp)
        this.$emit('result-event', re, ans)
      }
    }
  }
</script>