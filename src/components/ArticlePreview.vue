<template>
    <div class="row">
        <div v-for="(article, index) in getArticles" :key="index" class="blog-article d-flex justify-content-center flex-column align-items-center mb-3 col-md-6">
            <div class="article-container d-flex justify-content-center flex-column">
                <div class="image-container mb-2">
                    <img v-if="article.image_url" :src='article.image_url' :alt="article.title">  
                    <img v-else src="https://image.freepik.com/vecteurs-libre/collection-joueurs-football-dessin-anime_23-2149022199.jpg" :alt="article.title">
                </div>
                <h2 class="article-title">{{ article.title }} ?</h2>
                <p class="article-date">{{ new Date(article.pubDate).toLocaleString("fr-FR", {
                    day: '2-digit', 
                    month: '2-digit',
                    year: 'numeric'
                }) }} - 4 min read</p>
                <p class="article-description"> {{ article.description }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArticlePreview",
    data() {
        return {
            
        }
    },
    computed: {
        getArticles(){
            return this.$store.state.articles
        }
    }
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