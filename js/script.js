const {createApp} = Vue;

createApp({
  data(){
    return{
      text:'Hello Vue!!',
      imageVuejs:'https://vuejs.org/images/logo.png'
      
    }
  }
  
}).mount('#app')