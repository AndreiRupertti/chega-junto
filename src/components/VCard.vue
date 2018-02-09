<template>
  <div class="is-collumn full-center">
    <div class="search-container is-collumn full-center">
      <div class="search-box is-row full-center">
        <span class="icon-search"><i class="fa fa-search"></i></span>
        <input v-model='filterText' id="search" placeholder="Pesquisar...">
      </div>
    </div>
    <div class="container is-row">
        <div class="cardbox">
          <div v-for="event in filteredEvents" :key="event._id" @click="show(event._id); findEventById(event._id)" class="card border-primary is-collumn">
            <div class="full-center is-primary-text">
              <div class="title-large no-text-overflow">{{event.title}}</div>
            </div>
            <div class="info is-second-text is-collumn no-text-overflow">
              <span><h4>{{event.adress}}</h4></span>
              <span>Data: {{event.date}}</span>
              <span>Horário: {{event.schedule}} </span>
            </div>
          </div>
          <v-modal :selectedEvent='selectedEvent'></v-modal>
          <slot></slot>
        </div>
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
          allOrgs.forEach((org) => {
            if (org.events) {
              this.events = this.events.concat(org.events)
            }
          })
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
        return this.events.filter((event) => (event.title.match(filterText) || event.adress.match(filterText)))
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
  .cardbox{
    justify-content: center;
  }
  .icon-search{
    visibility:hidden;
  }
}

@media only screen and (min-device-width: 1024px){
  .card{
    max-width: 25vw;
    min-width: 20vw;
    flex-grow: 3;
  }
  .cardbox{
      justify-content: flex-start;
  }
}

.cardbox{
  max-width: 90%;
  min-width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.cardbox::after {
  content: '';
  width: 100%;
}
.container{
  width: 100vw;
  justify-content: center;
  align-items: center;
}
.card{
  border-top: 10px solid var(--second-color);
  min-height: 25vh;
  justify-content: space-around;
  margin: 3vw;
}
.card:hover {
  cursor: pointer;
  box-shadow: 2px 2px 1px var(--shadow-color);
  background-color: var(--primary-color);
}
.info{
  padding: 5%;
  text-align: right;
  color: var(--second-text-color)
}
.search-container{
  min-height: 6vh;
}
.search-box{
  background-color: var(--primary-color);
  justify-content: space-around;
  border-radius: 50px 50px;
  min-height: 5vh;
  min-width: 20vw;
}
.search-box:focus-within i{
  color: var(--second-color);
}
.search-box:focus-within{
  /* color: var(--second-color); */
  border: 2px solid var(--second-color);
}
.icon-search i{
  padding: 20%;
  font-size: 1.2em;
  color: var(--second-text-color);
}
#search{
  color: var(--second-text-color);
  font-size: 1.2em;
  background: none;
  border: none;
  outline: none;
}
</style>
