<template>
  <div class="">

    <div class="search-box">
      <input v-model='filterText' @keyup.enter="onEnter" type="search" name="search" placeholder="pesquisar">
    </div>
    <div id="mainbox">
        <div v-for="event in filteredEvents" :key="event._id" @click="show(event._id); findEventById(event._id)" class="card">
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
      filterText: '',
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
  computed: {
    filteredEvents () {
      if (this.filterText !== '') {
        let filterText = new RegExp(this.filterText, 'i')
        return this.events.filter((event) => event.title.match(filterText))
      } else {
        return this.events
      }
    }
  },
  beforeMount () {
    this.findEvents(DatabaseService)
  }
}
</script>

<style scoped>
@media only screen and (max-device-width: 900px) {
  .card{
    max-width: 80vw;
    min-width: 40vw;
    flex-grow: 3;
  }
  #mainbox{
      justify-content: center;
  }
}

@media only screen and (min-device-width: 1024px){
  .card{
    max-width: 25vw;
    min-width: 20vw;
    flex-grow: 3;
  }
  #mainbox{
      justify-content: flex-start;
  }
}
.card{
  border: 1px solid gray;
  box-shadow: 1px 1px 3px #888;
  border-top: 10px solid MediumSeaGreen;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 3vw;
}
.card:hover {
    cursor: pointer;
    box-shadow: 5px 5px 3px #888;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#mainbox{
  box-sizing: border-box;
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;

}
#mainbox::after {
  content: '';
  width: 100%;
}
</style>
