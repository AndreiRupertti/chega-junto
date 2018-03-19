<template>
  <div class="is-collumn">
    <div class="">
      <v-header></v-header>
    </div>
    <div class="full-center is-row">
      <div class="form-div is-collumn">
        <div class="title-large is-collumn">
          <span >Inscreva-se</span>
        </div>
        <div class="form-body is-collumn">
          <div class="input-box">
            <input v-model='newUser.name' class="form-input" type="text" name="nameUser" placeholder='Nome de Usuário' required>
          </div>
          <div class="input-box">
            <input v-model='newUser.email' class="form-input" type="email" name="emailUser" placeholder='Email' required>
          </div>
          <div class="input-box">
            <input v-model='newUser.password' class="form-input" type="password" name="password" placeholder='Senha' required>
          </div>
          <div class="input-box">
            <input v-model='newUser.confirmPassword' id='confirmPassword' class="form-input" type="password" name="confirm-password" placeholder='Confirmar Senha' required>
          </div>
           <div class="is-collumn">
            <span class="warning"> {{ errorMessage }}</span>
          </div>
          <div class="form-button is-collumn">
            <button @click='insertUser()' type="button" name="button" class="btn-shadow">Salvar</button>
            <router-link :to="'/'" tag="div" class="link" exact>Voltar</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatabaseService from '@/services/DatabaseService'
import VHeader from '@/components/VHeader.vue'
// import routes from '@/router/index'

export default {
  components: {
    VHeader
  },
  data () {
    return {
      newUser: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    insertUser () {
      this.validateUser()
        .then(isValid => {
          if (isValid) {
            // DatabaseService.insertUser(this.newUser)
            //   .then(response => {
            //     alert('Sua conta foi criada com sucesso')
            //     routes.push({name: 'indexPage'})
            //   })
            //   .catch(e => {
            //     alert('Erro: Não foi possível criar sua conta, Tente novamente mais tarde')
            //     console.log(e)
            //   })
          }
        })
    },
    validateUser () {
      return DatabaseService.validation(this.newUser)
        .then(response => {
          if (response.data.message) {
            this.errorMessage = response.data.message
            // alert(response.data.message)
            return false
          } else {
            this.errorMessage = ''
            return true
          }
        })
        .catch(e => console.log(e))
    }
  },
  updated () {
    this.validateUser()
  }
}
</script>

<style scoped>

@media only screen and (max-device-width: 900px) {
  .form-div{
    min-width: 90vw;
  }
}
@media only screen and (min-device-width: 900px){
  .form-div{
    min-width: 30vw;
  }
}
.container {
  min-height: 90vh;
  min-width: 100%;
  justify-content: center;
}
.form-div{
  min-height: 65vh;
  max-height: 80vh;
  justify-content: space-around;
  border: 2px solid var(--primary-color);
}
.input-box{
  min-width: 100%;
}
.form-body{
  min-height: 50vh;
  min-width: 100%;
  align-items: center;
  justify-content: space-around;
}
.form-input{
  min-width: 80%;
  flex-grow: 2;
  font-size: 1.1em;
  background:  none;
  border: none;
  border-bottom: 2px solid var(--primary-text-color);
  outline: none;
  color: var(--primary-text-color);
}
.form-input:focus{
  border-bottom: 2px solid var(--second-color);
}
.form-button{
  min-height: 15vh;
  justify-content: space-around;
}
.link{
  text-decoration:underline;
  cursor: pointer;
  color: var(--primary-text-color);
}
.warning{
  color: var(--danger-color);
}
</style>
