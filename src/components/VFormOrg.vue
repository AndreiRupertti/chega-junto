<template>
  <div class="container is-row">
    <div class="form-div is-collumn">
      <div class="title-large is-collumn">
        <span >Inscreva-se</span>
      </div>
      <div class="form-body is-collumn">
        <div class="input-box">
          <input v-model='newOrg.name' class="form-input" type="text" name="nameOrg" placeholder='Nome da Organização' required>
        </div>
        <div class="input-box">
          <input v-model='newOrg.email' class="form-input" type="email" name="emailOrg" placeholder='Email' required>
        </div>
        <div class="input-box">
          <input v-model='newOrg.password' class="form-input" type="password" name="password" placeholder='Senha' required>
        </div>
        <div class="input-box">
          <input v-model='newOrg.confirmPassword' id='confirmPassword' class="form-input" type="password" name="confirm-password" placeholder='Comfirmar Senha' required>
        </div>
        <div v-if="(newOrg.name === '' || newOrg.email === '' || newOrg.password === '')">
          <span class="warning">Preencha todos os campos *</span>
        </div>
        <div v-else-if="(newOrg.password.length < 6)">
          <span class="warning">A senha deve ter pelo menos 6 digitos *</span>
        </div>
        <div v-else-if="(newOrg.password !== newOrg.confirmPassword)">
          <span class="warning">Confirme sua senha *</span>
        </div>
        <div class="form-button is-collumn">
          <button @click='insertOrg()' type="button" name="button" class="btn-shadow">Salvar</button>
          <a @click="$parent.resetPerfilChoice()" class="link">Voltar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatabaseService from '@/services/DatabaseService'
import routes from '@/router/index'

export default {
  props: ['newOrg'],
  methods: {
    insertOrg () {
      if (!this.isEmpty(this.newOrg)) {
        alert('Preencha todos os campos')
      } else if (!this.validatePassword(this.newOrg)) {
        alert('A senha deve ter pelo menos 6 digitos')
      } else if (!this.isSamePassword(this.newOrg)) {
        alert('As senhas diferem um da outra')
      } else if (this.removeConfirmPassword(this.newOrg)) {
        DatabaseService.insertOrg(this.newOrg)
          .then(response => {
            alert('Sua conta foi criada com sucesso')
            routes.push({name: 'indexPage'})
          })
          .catch(e => {
            alert('Erro: Não foi possível criar sua conta, Tente novamente mais tarde')
            console.log(e)
          })
      }
    },
    isEmpty (obj) {
      return (obj.name !== '' && obj.email !== '' && obj.password !== '')
    },
    isSamePassword (obj) {
      return (obj.password === obj.confirmPassword)
    },
    validatePassword (password) {
      return (password.length > 6)
    },
    removeConfirmPassword (obj) {
      return delete this.newOrg['confirmPassword']
    }
  },
  computed: {
    formMessage: (message) => {
      return message
    }
  }
}
</script>

<style scoped>

@media only screen and (max-device-width: 900px) {
  .form-div{
    min-width: 90vw;
  }
}
@media only screen and (min-device-width: 1024px){
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
