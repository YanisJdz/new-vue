import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles : []
  },
  mutations: {
    getApi(state){
      axios.get('http://api.fakecompany.life:30002/news')
              .then(result => {
                result.data.forEach(article => {
                  state.articles.push(article)
                });
                console.log(state.articles);
              })
    }
  },
  actions: {
  },
  modules: {
  }
})
