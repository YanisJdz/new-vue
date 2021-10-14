<template>
      <div class="articlepage">
                <!-- background-image: url('https://wallpaperaccess.com/full/5242273.jpg'); -->
        <!-- Background image -->
        <div
            v-bind:style="{ backgroundImage: 'url(' + articles[$route.params.id].media[0]['media-metadata'][2].url + ')' }"
            class="p-5 text-center bg-image mb-5"
            style="
                height: 100vh;
                background-size: cover;
                background-repeat: no-repeat;
                max-height:350px
            "
        >      
            <div>
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-white">
                        <h1 class="mb-5 mt-5"> {{articles[$route.params.id].title}} </h1>
                        <hr v-if="articles[$route.params.id].byline"/>
                        <h4 class="mb-5 mt-5" v-if="articles[$route.params.id].byline">{{articles[$route.params.id].byline}} </h4>
                    </div>
                </div>
            </div>
        </div>
        <!-- Background image -->
        <div class="row">
            <h2 class="mb-5">{{articles[$route.params.id].title}}</h2>
            <div class="col-8">
                <p v-if="articles[$route.params.id].abstract">{{articles[$route.params.id].abstract}}..</p> 
                <span v-else><p>This article has no content. You can check creator source <a :href="articles[$route.params.id].url" target="_blank">here</a> </p></span> 
                <p class="end-0">Read the full article <a target="_blank" :href="articles[$route.params.id].url">here</a>. </p>
            </div>
            <div class="col-4">
                <div class="card-deck mt-5">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">{{articles[$route.params.id].title}}</h5>
                            <ul class="list-group">
                                <li v-if="articles[$route.params.id].byline" class="list-group-item list-group-item-secondary"><font-awesome-icon icon="feather-alt" /> Author: <span>{{articles[$route.params.id].byline}}</span> </li>
                                <li v-else class="list-group-item list-group-item-secondary "><font-awesome-icon icon="user-secret" /> Unknown Author</li>
                                <li class="list-group-item list-group-item-secondary"><font-awesome-icon icon="at" /> Source: <a :href="articles[$route.params.id].url" target="_blank">{{articles[$route.params.id].source}}</a></li>
                                <li class="list-group-item list-group-item-secondary"><font-awesome-icon icon="history" /> Published: {{articles[$route.params.id].published_date}}</li>
                                <li class="list-group-item list-group-item-secondary"><font-awesome-icon icon="globe-africa" /> Section: {{articles[$route.params.id].section}}</li>
                                <li v-if="articles[$route.params.id].des_facet" class="list-group-item list-group-item-secondary"><font-awesome-icon icon="key" /><span v-for="keyword in articles[$route.params.id].des_facet" :key="keyword"> {{keyword}} | </span> </li>
                                <li v-else class="list-group-item list-group-item-secondary"><font-awesome-icon icon="user-secret"/> No keywords</li>
                            </ul>
                        </div>
                            <div class="card-footer">
                            <button type="button" class="btn" disabled>Profil</button> -
                            <button type="button" class="btn" disabled>Partager</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticleComponent',
    computed:{
        articles(){
            return this.$store.state.articles
        }
    }
}
</script>

<style scoped>
button:disabled {
  cursor: not-allowed;
  pointer-events: all !important;
}
.card {
  opacity: 0.8;
  filter: alpha(opacity=60);
}
.card-title {
  font-weight:600;
  text-align: center;
}
.card-text {
  text-align: justify;
}
a{
    color: grey;
}

</style>