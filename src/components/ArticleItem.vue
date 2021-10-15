<template>
    <div class="blog-article mb-5 col-md-6">
        <div class="article-container d-flex justify-content-center flex-column">
            <div class="image-container mb-2">
                <img :src="article.media[0]['media-metadata'][2].url" :alt="article.title">  
            </div>
            <h2 class="article-title">{{ article.title }} ?</h2>
            <p class="article-date">{{ article.published_date }} - 4 min read</p>
            <p class="article-description"> {{ article.abstract }} </p>
            <router-link class="read-button" :to= "{path: '/article/' + index}" >Read this Article</router-link>
        </div>
    </div>
</template>

<script scoped>
export default {
    name: "ArticleItem",
    props: {
        article: Object,
        index: Number
        
    },
    data() {
        return {
            
        }
    },

    methods: {
        scroll() {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    this.$store.commit('getApi')
                }
            }
        },
    },
    beforeMount(){
        this.scroll()
    },


}


</script>

<style scoped>
    .article-title {
        font-size: clamp(16px, 2vw, 20px);
        color: black;
        font-weight: bold;
        align-self: flex-start;
        margin-bottom: 0;
        text-align: start;
        
    }
    .blog-article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .article-container {
        width: 85%;
        height: 100%;

    }
    .image-container {
        width: 100%;
        height: 117px;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .article-date {
        color: #B1B1B1;
        font-size: clamp(10px, 1vw, 12px);
        align-self: flex-start;
        margin-bottom: 0.2em;
    }
    .article-description {
        font-size: clamp(12px, 2vw, 14px);
        text-align: start;
        font-family: 'Open Sans';
        margin: 0
    }
    .read-button {
        margin-top: 5px;
        align-self: flex-start;
        justify-self: flex-end;
        color: #31324a;
        cursor: pointer;
        text-decoration: none;
        font-size: clamp(16px, 2vw, 18px);
        background-color: #dee0fc;
        border-radius: 5px;
        border: 1px solid #dee0fc;
        padding: 5px 10px 5px 10px;
        transition: all .2s ease-in-out;
    }
    .read-button:hover{
        background-color: #a0a4d9;
    }

    @media (min-width: 450px){
        .image-container{
            height: 150px;
        }
    }
    @media (min-width: 994px){
        .image-container{
            height: 224px;
        }
    }

</style>