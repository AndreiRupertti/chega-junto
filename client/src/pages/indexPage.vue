<template>
  <div class="hello">
    <h1>Chega Junto!</h1>
    <v-card></v-card>
  </div>
</template>

<script>
import DatabaseService from '@/services/DatabaseService'
import VCard from '@/components/VCard.vue'

export default {

  components: {
    VCard
  },
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
      })
        .then(response => (this.messege = response.data.response))
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>
