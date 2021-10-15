<template>
  <div >
    <h1 class="mb-3 mt-3">Modifier ou supprimer un article</h1>
    <ul class="list-group ">
        <li v-for="(article,index) in getArticles" :key="index" class="list-group-item">
            {{index}} -- {{article.title}} -- {{article.byline}}  <router-link :to="{path: '/admin/modify/' + index}"><font-awesome-icon icon="feather-alt" /> </router-link> <button @click.prevent="delArticle(index)">Supprimer</button>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    computed: {
        getArticles(){
            return this.$store.state.articles
        }
    },
    methods:{
        delArticle(index){
            this.$store.commit('removeArticle',index)
        }
    }
}
</script>

<style>

</style>