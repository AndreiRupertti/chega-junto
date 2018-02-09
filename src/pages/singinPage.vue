<template>
  <div class="container is-collum">
    <v-header/>
    <div v-if="(isOrg === false && isPerson === false)" class="perfil-choice">
      <div class="is-row full-center">
        <h2 class="title">Como deseja se increver?</h2>
      </div>
      <div class="container is-row">
        <div @click="choseOrg()" class="org is-row full-center">
          <div class="imagem full-center">
            ORGANIZAÇÃO
          </div>
        </div>
        <div class="person is-row full-center">
          <div class="imagem full-center">
            Pessoa
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="isOrg===true" class="is-row full-center">
      <button @click="resetPerfilChoice()" type="button" name="button">voltar</button>
      <input type="text" name="org-name" placeholder="name">
      <input type="password" name="password" placeholder="password">
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/VHeader.vue'

export default {
  components: {
    VHeader
  },
  data () {
    return {
      isOrg: false,
      isPerson: false
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
.title{
  color: var(--primary-text-color);
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
  background-color: grey;
  height: 30%;
  width: 30%;
}
</style>
