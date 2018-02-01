<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <input
      type="text"
      v-model="name"
      name="name"
      placeholder='Name' />
      <br>
    <input
      type="email"
      v-model="email"
      name="email"
      placeholder='Email' />
      <br>
    <input
      type="password"
      v-model="password"
      name="password"
      placeholder='Password' />
      <br>
      <button @click="insertItem()">Save</button>
  </div>
</template>

<script>
import DatabaseService from '@/services/DatabaseService'

export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    insertItem () {
      DatabaseService.insertItem({
        name: this.name,
        email: this.email,
        password: this.password
      }).then(response => console.log(response)).catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>
