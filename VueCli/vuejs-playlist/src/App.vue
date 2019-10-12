<template>
  <div>
<!--    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>-->
<!--    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>-->
<!--    <app-footer v-bind:title="title"></app-footer>-->
<!--    <form-helper>-->
<!--&lt;!&ndash;        <h2 slot="slotTitle">{{slotTitle}}</h2>&ndash;&gt;-->
<!--&lt;!&ndash;        <p slot="description">Parent component to child component show data using slot Tag</p>&ndash;&gt;-->

<!--      <div slot="form-helper">-->
<!--        <h3>This is title of the form</h3>-->
<!--        <p>Information about the form</p>-->
<!--      </div>-->
<!--      <div slot="form-fields">-->
<!--          <input type="text" placeholder="Name" required>-->
<!--          <input type="password" placeholder="Password" required>-->
<!--      </div>-->
<!--      <div slot="form-controls">-->
<!--          <button @click="handleSubmit">Submit</button>-->
<!--      </div>-->
<!--    </form-helper>-->

<!--      <keep-alive>-->
<!--        <component v-bind:is="component"></component>-->
<!--      </keep-alive>-->

<!--      <button @click="component='form-one'">Show form One</button>-->
<!--      <button @click="component='form-two'">Show form Two</button>-->

<!--      <input-binding slot="BindInput"></input-binding>-->
      <show-data></show-data>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';
import formHelper from './components/formHelper.vue';
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';
import InputBind from './components/InputBind.vue';
import showData from './components/showData.vue';

export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-ninjas':Ninjas,
    'form-helper':formHelper,
    'form-one':formOne,
    'form-two':formTwo,
    'input-binding':InputBind,
    'show-data':showData
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
      title:"Vue Ninjas",
      slotTitle: 'I am a dynamic slot Title',
      //component handle dynamicaly
      // component: 'form-one'
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
