<template>
    <div id="mainbox">
        <div v-for="event in events" :key="event._id" @click="show(event._id); findEventById(event._id)" class="card">
          <div class="title-box">
            <div class="title-card">{{event.title}}</div>
          </div>
          <div class="info">
            <span><h4>{{event.organization}}</h4></span>
            <span>Data: {{event.date}}</span>
            <span>Horário: {{event.schedule}} </span>
          </div>
        </div>
        <v-modal :selectedEvent='selectedEvent'></v-modal>
      <slot></slot>
    </div>
</template>

<script>
import DatabaseService from '@/services/DatabaseService'
import VModal from '@/components/VModal.vue'

export default {
  components: {
    VModal
  },
  data () {
    return {
      events: [],
      selectedEvent: {}
    }
  },
  methods: {
    findEvents (dbService) {
      dbService.findOrgs()
        .then(response => {
          const allOrgs = response.data.query
          /* eslint-disable */
          allOrgs.forEach((org) => this.events = this.events.concat(org.events))
          /* eslint-enable */
        })
        .catch(e => console.log(e))
    },
    findEventById (id) {
      /* eslint-disable */
      DatabaseService.findEventById(id)
        .then(response => this.selectedEvent = response.data.query[0])
        .catch(e => console.log(e))
      /* eslint-enable */
    },
    show (id) {
      this.cardId = id
      this.$modal.show('event-modal')
    },
    hide () {
      this.$modal.hide('event-modal')
    }
  },
  beforeMount () {
    this.findEvents(DatabaseService)
  }
}
</script>

<style scoped>
.card{
  max-width: 80vw;
  min-width: 20vw;
  border: 1px solid gray;
  box-shadow: 1px 1px 3px #888;
  border-top: 10px solid MediumSeaGreen;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 3vw;
  flex-grow: 3;
}
.card:hover {
    cursor: pointer;
    min-width: 25vw;
    min-height: 30vh;
    box-shadow: 5px 5px 3px #888;
    transition: min-width 0.5s, min-height 0.5s ;
    background-color: Azure;
}
.title-box{
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-card{
  font-size: 1.8em;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info{
  display: flex;
  flex-direction:column;
  padding: 5%;
  text-align: right;
  color: darkgray;
}
#mainbox{
  box-sizing: border-box;
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;

}
#mainbox::after {
  content: '';
  width: 100%;
}
</style>
