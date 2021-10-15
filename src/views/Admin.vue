<template>
    <div class='container d-flex flex-column'>
        <div class="admin-panel d-flex flex-column">
            <h1 class="mb-3 mt-3">Vue Admin</h1>
            <div>
            <p class = "subtitle">Author :</p>
            <input class="input-area form-control" type="text" v-model="author" placeholder="Author">
            </div>
            <p class = "subtitle">Title :</p>
            <input class="input-area form-control" type="text" v-model="title" placeholder="Title">
            <p class = "subtitle">Description :</p>
            <textarea class="input-area form-control" v-model="description" name="description" id="1" cols="1" rows="2" placeholder="Description of the article"></textarea>
            <p class = "subtitle">Content :</p>
            <textarea  class="input-area form-control" v-model="content" name="content" id="" cols="30" rows="10" placeholder="Content of the article goes right here"></textarea>
            <button class="btn btn-primary" @click="addArticle(createArticle())" v-bind:disabled="author.length === 0" type="submit">Add article</button>
        </div>
        <div class="preview-article">
            <h2 class="mt-3 mb-3">Article Preview</h2>
            <h2>{{ author }}</h2>
            <h3>{{ title }}</h3>
            <p class='articleDescription'>{{ description}}</p>
            <p class='articleContent'>{{ content}}</p>
            
        </div>
    
    </div>
</template>

<script>
export default {
    name: 'Admin',
    data() {
        return {
            title: '',
            author: '',
            description: '',
            content: '',
        }
    },
    methods: {
        createArticle(){
            let article = {
                title: this.title,
                author: this.author,
                description: this.description,
                content: this.content
            }
            return article
        },
        addArticle(article){
            this.$store.commit('addArticle', article)
        }
    }
}
</script>

<style>
h1{
    text-decoration: underline #001252;
}

button {
    margin-top: 10px;
}
.subtitle{
    font-size: clamp(12px, 1.5vw, 18px);
    display: flex;
    margin-top: 10px;
    margin-bottom: 0;
    text-decoration: underline #001252;
}

</style>