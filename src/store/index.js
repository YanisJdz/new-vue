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
      axios.get('https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=yjSObpLOd9RVv4SEmYC4J270oMdsbbVJ')
      .then(result => {
          result.data.results.forEach(article => {
            if(article.media.length === 0){
              const image = {
                ['media-metadata'] : [
                  {
                    url: ''
                  },
                  {
                    url: ''
                  },
                  {
                    url: 'https://wallpaperaccess.com/full/5242273.jpg'
                  },

                ]
              }
              article.media.push(image)
            }
            state.articles.push(article)
          });
        })
    },
    addArticle(state, article){
      //Fonction Add Article
      state.articles.push(article)
    },
    removeArticle(state,index){
      //Fonction Remove Article
      state.articles.splice(index, 1);
    },
    modifyArticle(state,newArticle){
      state.articles[state.articles.findIndex((el) => el.id === newArticle.article.id)] = newArticle.article
      console.log(state.articles);
    }
  },
  actions: {
  },
  modules: {
  }
})
