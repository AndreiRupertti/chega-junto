<template >
  <modal name="event-modal" height="auto" width="80%" :scrollable="true">
    <div class="event-modal">
      <div class="header-modal">
        <div class="title-modal">
          <div class="is-collum full-center">
          <h1 class="title-text">{{selectedEvent.title}}</h1>
          <div class="list-info">
            <ul>
              <li>Organização: {{selectedEvent.organization}}</li>
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
      </div>
      <div class="is-row full-center">
        <button class="btn-shadow">
          Quero Participar
        </button  >
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  props: ['selectedEvent']
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
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  /* align-items:baseline; */
  /* flex-wrap: wrap; */
}
.title-modal{
  display: flex;
  flex-wrap: wrap;
  overflow:hidden;
}
.title-text{
  font-family: 'Fira Sans', sans-serif;
  display: flex;
  flex-shrink: 1;
}
.main-modal{
  text-justify: inter-word;
}
.btn-join{
  min-width: 20vw;
  min-height: 5vh;
  /* border-radius: 100; */
  background-color: aqua;
}
</style>
