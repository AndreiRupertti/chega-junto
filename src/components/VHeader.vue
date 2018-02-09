<template >
  <div class="header is-row">
    <div class="logo full-center">
      <router-link :to="'/'" tag='span' class="btn-primary" exact>CHEGA JUNTO!</router-link>
    </div>
    <div class="header-buttons is-row">
      <div class="login is-row">
        <div class="btn-primary">Entrar</div>
      </div>
      <div class="singin is-row">
        <router-link :to="'singin'" tag="div" class="btn-primary" exact>Inscrever-se</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
