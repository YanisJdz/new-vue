<template>
    <div class="row">
        <div class="blog-article d-flex justify-content-center flex-column align-items-center mb-3 col-md-6">
            <div class="article-container d-flex justify-content-center flex-column">
                <div class="image-container mb-2">
                    <img src="https://picsum.photos/380/300" alt="Blog photo">  
                </div>
                <h2 class="article-title">How to be more productive ?</h2>
                <p class="article-date">17 May 2021 - 4 min read</p>
                <p class="article-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna at turpis ullamcorper maximus eu accumsan lorem. Curabitur tempus </p>

            </div>
        </div>
        <div class="blog-article d-flex justify-content-center flex-column align-items-center mb-3 col-md-6">
            <div class="article-container d-flex justify-content-center flex-column">
                <div class="image-container mb-2">
                    <img src="https://picsum.photos/420/300" alt="Blog photo">  
                </div>
                <h2 class="article-title">This is the new vue</h2>
                <p class="article-date">20 May 2019 - 7 min read</p>
                <p class="article-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna at turpis ullamcorper maximus eu accumsan lorem. Curabitur tempus </p>
            </div>
        </div>
        <div class="blog-article d-flex justify-content-center flex-column align-items-center mb-3 col-md-6">
            <div class="article-container d-flex justify-content-center flex-column">
                <div class="image-container mb-2">
                    <img src="https://picsum.photos/500/260" alt="Blog photo">  
                </div>
                <h2 class="article-title">How to be more productive ?</h2>
                <p class="article-date">17 May 2021 - 4 min read</p>
                <p class="article-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna at turpis ullamcorper maximus eu accumsan lorem. Curabitur tempus </p>

            </div>
        </div>
        <div class="blog-article d-flex justify-content-center flex-column align-items-center mb-3 col-md-6">
            <div class="article-container d-flex justify-content-center flex-column">
                <div class="image-container mb-2">
                    <img src="https://picsum.photos/800/224" alt="Blog photo">  
                </div>
                <h2 class="article-title">This is the new vue</h2>
                <p class="article-date">20 May 2019 - 7 min read</p>
                <p class="article-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna at turpis ullamcorper maximus eu accumsan lorem. Curabitur tempus </p>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArticlePreview",
}
</script>

<style scoped>
    .article-title {
        font-size: clamp(16px, 2vw, 20px);
        color: black;
        font-weight: bold;
        align-self: flex-start;
        margin-bottom: 0;
        
    }
    .article-container {
        width: 75%;
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
        font-family: 'lobster';
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