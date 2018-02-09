<template>
  <div class="main is-primary-dark">
    <v-header/>
    <v-card/>
  </div>
</template>

<script>
import DatabaseService from '@/services/DatabaseService'
import VCard from '@/components/VCard.vue'
import VHeader from '@/components/VHeader.vue'

export default {

  components: {
    VCard,
    VHeader
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
