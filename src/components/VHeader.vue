<template >
  <div class="header is-row">
    <div class="logo">
      <span>chega junto</span>
    </div>
    <div class="header-buttons is-row">
      <div class="login">
        <div class="btn-primary border-primary btn-size is-second-text">Login</div>
      </div>
      <div class="singin">
        <div class="btn-primary border-primary btn-size .btn-size is-second-text">Cadastrar</div>
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
  height: 6vh;
}
.btn-size{
  width: 6vw;
}
.btn-primary{

}
.logo{
  min-width: 10%;
}
.header-buttons{
  min-width: 18%;
  justify-content:space-around;
}
.login, .singin{
  flex-grow: 3;
}
</style>
