<template>
    <div>
      <div id="mainbox" v-for="item in items" :key="item._id">
        <div v-for="event in item.events" :key="event.org" class="card">
          <div class="title">
            <h1>{{event.org}}</h1>
          </div>
          <div class="info">
            <p>{{event.date}} - {{event.schedule}}</p>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
</template>

<script>
import DatabaseService from '@/services/DatabaseService'

export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    findEvents () {
      DatabaseService.findEvents()
        .then(response => {
          this.items = response.data.item
        })
        .catch(e => console.log(e))
    }
  },
  beforeMount () {
    this.findEvents()
  }
}
</script>

<style scoped>
/* .card{
  background-color: white;
  width: 10%;
  height: 15%;

} */
.card{
width: 15%;
border: 1px solid gray;
box-shadow: 1px 1px 3px #888;
border-top: 10px solid green;
min-height: 150px;
padding-: 10px;
margin: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;

}
.title{
  display: flex;
  align-items: center;
  justify-content: center;
}
.info{
  display: flex;
  align-items: center;
  justify-content:center;
}
h1{

}

p{

}

#mainbox{
  font-family: calibri;
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
</style>
