<template>
<div>
  <div class='container d-flex flex-column'>
    <div class="admin-panel d-flex flex-column">
        <h1>Modifier l'article n°{{id}}</h1>
        <p class = "subtitle mb-0 mt-2">Title</p>
        <input class="input-area" type="text" v-model="title" :placeholder="getArticles[id].title">
        <p class = "subtitle mb-0 mt-2">Author</p>
        <input class="input-area" type="text" v-model="author" placeholder="Author">
        <p class = "subtitle mb-0 mt-2">Content</p>
        <textarea  class="input-area " v-model="content" name="content" id="" cols="30" rows="10" placeholder="Content of the article goes right here"></textarea>
        <button @click="modifyArticle">Modifier</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: {
        id: String
    },
    data(){
        return{
            title: '',
            author: '',
            description: '',
            content: '',
        }
    },
    computed: {
        getArticles(){
            return this.$store.state.articles
        },
    },
    methods:{
        setData(){
            this.title = this.getArticles[this.id].title
            this.author = this.getArticles[this.id].byline
            this.content = this.getArticles[this.id].abstract
        },
        modifyArticle(){
            this.$store.commit('modifyArticle',
            {   
                article:{

                    title: this.title,
                    byline: this.author,
                    abstract: this.content,
                    adx_keywords: this.getArticles[this.id].adx_keywords,
                    asset_id: this.getArticles[this.id].asset_id,
                    column: this.getArticles[this.id].column,
                    des_facet: this.getArticles[this.id].des_facet,
                    eta_id: this.getArticles[this.id].eta_id,
                    geo_facet: this.getArticles[this.id].geo_facet,
                    id: this.getArticles[this.id].id,
                    media: this.getArticles[this.id].media,
                    nytdsection: this.getArticles[this.id].nytdsection,
                    org_facet: this.getArticles[this.id].org_facet,
                    per_facet: this.getArticles[this.id].per_facet,
                    published_date: this.getArticles[this.id].published_date,
                    section: this.getArticles[this.id].section,
                    source: this.getArticles[this.id].source,
                    subsection: this.getArticles[this.id].subsection,
                    type: this.getArticles[this.id].type,
                    updated: this.getArticles[this.id].updated,
                    uri: this.getArticles[this.id].uri,
                    url: this.getArticles[this.id].url
                },
                index: this.id
            })
        }
    },
    created(){
        this.setData()
    }
}
</script>

<style>

</style>