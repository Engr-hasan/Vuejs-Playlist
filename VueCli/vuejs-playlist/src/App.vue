<template>
  <div>
    <app-header></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
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
      ]
    }
  }
}
</script>

<style>

</style>
