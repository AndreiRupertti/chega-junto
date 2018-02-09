<template >
  <div class="header is-row">
    <div class="logo full-center">
      <span>CHEGA JUNTO!</span>
    </div>
    <div class="header-buttons is-row">
      <div class="login is-row">
        <div class="btn-primary">Entrar</div>
      </div>
      <div class="singin is-row">
        <v-link href="/singin">
          <div class="btn-primary">Inscrever-se</div>
        </v-link>
      </div>
    </div>
  </div>
</template>

<script>
import VLink from '@/components/VLink.vue'

export default {
  components: {
    VLink
  }
}
</script>

<style scoped >
.header{
  min-width: 100%;
  justify-content:space-between;
  align-items: center;
  height: 10vh;
}
.logo{
  min-width: 15%;
  min-height: 100%;
  color: white;
}
.header-buttons{
  min-width: 20%;
  min-height: 100%;
  justify-content:space-around;
  align-items: center;
}
.login, .singin{
  min-width: 40%;
  color: var(--second-text-color);
}
</style>
