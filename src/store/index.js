import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles : [

    ]
  },
  mutations: {
    getApi(state){
      axios.get('http://api.fakecompany.life:30002/news')
        .then(result => {
          result.data.forEach(article => {
            state.articles.push(article)
          });
        })
    },
    addToArticles(state, articles){
      articles.forEach(article => {
        state.articles.push(article)
      });
    },  
    addArticle(){
      //Fonction Add Article
    },
    removeArticle(){
      //Fonction Remove Article
    },
    modifyArticle(){

    }
  },
  actions: {
  },
  modules: {
  }
})
