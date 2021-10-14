<template>
      <div class="articlepage">
        <!-- Background image -->
        <div
            class="p-5 text-center bg-image mb-5"
            style="
                background-image: url('https://wallpaperaccess.com/full/5242273.jpg');
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
                        <hr v-if="articles[$route.params.id].creator"/>
                        <h4 class="mb-5 mt-5" v-if="articles[$route.params.id].creator"> Par : {{articles[$route.params.id].creator[0]}} </h4>
                    </div>
                </div>
            </div>
        </div>
        <!-- Background image -->
        <div class="row">
            <h2 class="mb-5">{{articles[$route.params.id].title}}</h2>
            <div class="col-8">
                <span v-if="articles[$route.params.id].content"><p v-html="articles[$route.params.id].content"></p></span> 
                <span v-else><p>This article has no content. You can check creator source <a :href="articles[$route.params.id].link" target="_blank">here</a> </p></span> 
            </div>
            <div class="col-4">
                <div class="card-deck mt-5">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">{{articles[$route.params.id].title}}</h5>
                            <ul class="list-group">
                                <li v-if="articles[$route.params.id].creator" class="list-group-item list-group-item-secondary"><font-awesome-icon icon="feather-alt" /> Author: <span>{{articles[$route.params.id].creator[0]}}</span> </li>
                                <li v-else class="list-group-item list-group-item-secondary "><font-awesome-icon icon="user-secret" /> Unknown Author</li>
                                <li class="list-group-item list-group-item-secondary"><font-awesome-icon icon="at" /> Source: <a :href="articles[$route.params.id].link" target="_blank">{{articles[$route.params.id].source_id}}</a></li>
                                <li class="list-group-item list-group-item-secondary"><font-awesome-icon icon="history" /> Published: {{articles[$route.params.id].pubDate}}</li>
                                <li class="list-group-item list-group-item-secondary"><font-awesome-icon icon="key" /> <span v-if="articles[$route.params.id].keywords"> <span v-for="keyword in articles[$route.params.id].keywords" :key="keyword">{{keyword}} | </span> </span> <span v-else>No Keywords</span> </li>
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