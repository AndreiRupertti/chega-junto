<template>
  <div class="hello">
    <v-link href='/about'>click aki</v-link>
    <h1>{{messege}}</h1>
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
import VLink from '@/components/VLink.vue'

export default {

  components: {
    VLink
  },
  data () {
    return {
      name: '',
      email: '',
      password: '',
      messege: 'aloo'
    }
  },
  methods: {
    insertItem () {
      DatabaseService.insertItem({
        name: this.name,
        email: this.email,
        password: this.password
      })
        .then(response => (this.messege = response.data.response))
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>
