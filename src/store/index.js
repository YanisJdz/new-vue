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
      axios.get('https://newsdata.io/api/1/news?apikey=pub_17577c4f3309833a0e79ea0d6ed11c96bcf6&q=Sports&language=fr')
        .then(result => {
          result.data.results.forEach(article => {
            state.articles.push(article)
          });
          console.log(state.articles);
          console.log(result.data.results);
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
