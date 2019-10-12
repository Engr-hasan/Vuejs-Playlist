<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'

export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-ninjas':Ninjas
  },
  data () {
    return{
      ninjas: [
        {name: 'hasan',speciality: 'Vue Components',show: false},
        {name: 'rohim',speciality: 'Ng Components',show: false},
        {name: 'korim',speciality: 'Html Components',show: false},
        {name: 'johir',speciality: 'Css Components',show: false},
        {name: 'shahin',speciality: 'Jq Components',show: false},
        {name: 'habib',speciality: 'Sql Components',show: false}
      ],
      title:"Vue Ninjas"
    }
  },
  methods:{
    updateTitle: function (updateTitle) {
      this.title = updateTitle;
    }
  }
}
</script>

<style>

</style>
