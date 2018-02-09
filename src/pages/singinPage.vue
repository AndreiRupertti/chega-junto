<template>
  <div class="container is-collumn">
    <v-header/>
    <div v-if="(isOrg === false && isPerson === false)" class="perfil-choice">
      <div class="title-container is-row full-center">
        <h2 class="title-large">Como deseja se increver?</h2>
      </div>
      <div class="container is-row">
        <div @click="choseOrg()" class="org is-row full-center">
          <div class="imagem is-collumn full-center">
            <h1 class="title-medium">Organização</h1>
            <span class="fa fa-building"></span>
          </div>
        </div>
        <div class="person is-row full-center">
          <div class="imagem is-collumn full-center">
            <h1 class="title-medium">Voluntário</h1>
            <span class="fa fa-user"></span>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="isOrg===true" class="is-row full-center">
      <v-form-org :newOrg='newOrg'/>
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/VHeader.vue'
import VFormOrg from '@/components/VFormOrg.vue'

export default {
  components: {
    VHeader,
    VFormOrg
  },
  data () {
    return {
      isOrg: false,
      isPerson: false,
      newOrg: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    resetPerfilChoice () {
      this.isOrg = false
      this.isPerson = false
    },
    choseOrg () {
      this.isOrg = true
      this.isPerson = false
    },
    chosePerson () {
      this.isPerson = true
      this.isOrg = false
    }
  }
}
</script>

<style scoped>
.container{
  min-height: 100%;
}
.title-container{
  height: 10vh;
}
.org{
  flex-grow: 1;
  min-height: 80vh;
}
.org:hover{
  cursor: pointer;
  background: linear-gradient(to left, var(--primary-dark-color),var(--second-color));
}
.person{
  flex-grow: 1;
  min-height: 80vh;
}
.person:hover{
  cursor: pointer;
  background: linear-gradient(to right, var(--primary-dark-color),var(--second-color));
}
.imagem{
  justify-content: space-between;
  height: 50%;
  width: 30%;
}
.imagem span{
  color: var(--primary-text-color);
  font-size: 10em;
}
</style>
