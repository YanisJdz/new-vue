<template>
    <div>
        <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
        </b-alert>
        <div class='container d-flex flex-row pt-3'>
            <div class="admin-panel d-flex flex-column">
                <h2 class="mb-3 mt-3">Admin pannel</h2>
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
                <div class="article d-flex flex-column">
                    <p class = "subtitle">Author :</p>
                    <p class="author-preview content-written">{{ author }}</p>
                    <p class = "subtitle">Title :</p>
                    <p class="title-preview content-written">{{ title }}</p>
                    <p class = "subtitle">Description :</p>
                    <p class='description-preview content-written'>{{ description}}</p>
                    <p class = "subtitle">Content :</p>
                    <p class='content-preview content-written'>{{ content}}</p>
                </div> 
            </div>
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
                abstract: this.description,
                content: this.content,
                published_date: new Date(),
                media: [{
                    ['media-metadata'] : [
                        {
                            url: ''
                        },
                        {
                            url: ''
                        },
                        {
                            url: 'https://picsum.photos/1440/1024'
                        },
                    ]
                }]
            }
            return article
        },
        sucessAlert(){
            let alertDiv = document.getElementsByClassName('.alert')[0]
            alertDiv.alert()
        },
        addArticle(article){
            this.$store.commit('addArticle', article)
            this.successAlert
        },
        
    }
}
</script>

<style scoped>
    .container{
        background-color: #F6F8FF;
    }
    .admin-panel {
        width: 50%;
        margin-right: 10px;
    }
    .preview-article {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-left: 10px
        
    }
    button {
        margin-top: 10px;
    }
    .subtitle {
        font-size: clamp(12px, 1.5vw, 18px);
        margin-top: 10px;
        margin-bottom: 0;
        text-decoration: underline #001252;
    }
    .container {
        justify-content: space-evenly;

    }
    .content-written {
        padding-left: 5px;
        height: 100%;
        background-color: white;
        text-align: start;
    }
   

    .author-preview {
        width: 100%;
    }

    .title-preview {
        font-size: clamp(16px, 2vw, 20px);
        color: black;
        font-weight: bold;
    
    }
    .description-preview {
        font-size: clamp(12px, 2vw, 14px);
        font-family: 'Open Sans';
    }
    .content-preview {
        font-size: clamp(12px, 2vw, 14px);
        font-family: 'Open Sans';
    }
    

</style>