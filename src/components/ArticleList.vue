<template>
  <div>
      <ArticleItem v-for="(article, index) in getArticles" :key="index" :article="article"/>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'

export default {
    data() {
        return {
            
        }
    },
    components: {
    ArticleItem
  },
    computed: {
        getArticles(){
            return this.$store.state.articles
        }
    },
}
</script>

<style>

</style>