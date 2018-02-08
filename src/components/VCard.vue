<template>
  <div>
    <div class="search-box">
      <input v-model='filterText' @keyup.enter="onEnter" type="search" name="search" placeholder="pesquisar">
    </div>
    <div id="cardbox">
        <div v-for="event in filteredEvents" :key="event._id" @click="show(event._id); findEventById(event._id)" class="card border-primary is-collum">
          <div class="full-center is-primary-text">
            <div class="text-large no-text-overflow">{{event.title}}</div>
          </div>
          <div class="info is-second-text is-collum no-text-overflow">
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
  #cardbox{
      justify-content: center;
  }
}

@media only screen and (min-device-width: 1024px){
  .card{
    max-width: 25vw;
    min-width: 20vw;
    flex-grow: 3;
  }
  #cardbox{
    justify-content: flex-start;
  }
}
.card{
  border-top: 10px solid var(--second-color);
  min-height: 25vh;
  justify-content: space-around;
  margin: 3vw;
}
.card:hover {
  cursor: pointer;
  box-shadow: 3px 3px 1px var(--shadow-color);
  background-color: var(--primary-color);
}
.info{
  padding: 5%;
  text-align: right;
  color: var(--second-text-color)
}
#cardbox{
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
#cardbox::after {
  content: '';
  width: 100%;
}
</style>
