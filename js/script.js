const {createApp} = Vue;

createApp({
  data(){
    return{
      greetings:'Hello',
      name : 'Vue.js',
      imageVuejs:'https://vuejs.org/images/logo.png'
    }
  },
  methods :{
    greetName(){
      this.greetings = `${this.greetings} ${this.name}`
    }
  },

  mounted(){
    this.greetName();
  }
  
}).mount('#app')