<template >
  <modal name="event-modal" height="auto" width="80%" :scrollable="true">
    <div class="event-modal">
      <div class="header-modal is-row">
        <div class="title-modal">
          <div class="is-collum full-center">
            <h1 class="title-text">{{selectedEvent.title}}</h1>
            <div class="list-info">
              <ul>
                <li>Organização: {{selectedEvent.organization}}</li>
                <li>Localização: {{selectedEvent.adress}}</li>
                <li>Data: {{selectedEvent.date}}</li>
                <li>Horário: {{selectedEvent.schedule}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="top-right">
          <button class="btn-close" @click="$modal.hide('event-modal')">
            ❌
          </button>
        </div>
      </div>
      <div class="main-modal">
        <h3>Descrição do Evento</h3>
        <p>{{selectedEvent.description}}</p>
        <p><b>Contato: <span class="contact-link">{{selectedEvent.contact}}</span></b></p>
      </div>
      <div class="is-row full-center">
        <button @click="alert()" class="btn-shadow">
          Quero Participar
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  props: ['selectedEvent'],
  methods: {
    alert () {
      alert(`Você decidiu participar do evento ${this.selectedEvent.title}. Estamos contando com você!`)
    }
  }
}
</script>

<style scoped>

.event-modal{
  display: flex;
  justify-content: center;
  flex-grow: 1;
  flex-direction: column;
  padding: 3%;
}
.header-modal{
  justify-content:space-between;
}
.title-modal{
  display: flex;
  flex-wrap: wrap;
  overflow:hidden;
}
.title-text{
  display: flex;
  flex-shrink: 1;
}
.main-modal{
  text-justify: inter-word;
}
.btn-join{
  min-width: 20vw;
  min-height: 5vh;
  background-color: var(--second-color);
}
.contact-link{
  color: #BF360C;
}
</style>
