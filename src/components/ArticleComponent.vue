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
                        <h1 class="mb-5 mt-5">Titre du post / Article </h1>
                        <hr/>
                        <h4 class="mb-5 mt-5">Par : Auteur</h4>
                    </div>
                </div>
            </div>
        </div>
        <!-- Background image -->
        <div class="row">
            <h2 class="mb-5">Titre du post / article</h2>
            <div class="col-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel adipisci quia explicabo facere sint, aliquid perferendis facilis esse ipsum et dolor obcaecati deserunt. Ad, illum. Illum facere harum ducimus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel adipisci quia explicabo facere sint, aliquid perferendis facilis esse ipsum et dolor obcaecati deserunt. Ad, illum. Illum facere harum ducimus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel adipisci quia explicabo facere sint, aliquid perferendis facilis esse ipsum et dolor obcaecati deserunt. Ad, illum. Illum facere harum ducimus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel adipisci quia explicabo facere sint, aliquid perferendis facilis esse ipsum et dolor obcaecati deserunt. Ad, illum. Illum facere harum ducimus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel adipisci quia explicabo facere sint, aliquid perferendis facilis esse ipsum et dolor obcaecati deserunt. Ad, illum. Illum facere harum ducimus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel adipisci quia explicabo facere sint, aliquid perferendis facilis esse ipsum et dolor obcaecati deserunt. Ad, illum. Illum facere harum ducimus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel adipisci quia explicabo facere sint, aliquid perferendis facilis esse ipsum et dolor obcaecati deserunt. Ad, illum. Illum facere harum ducimus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel adipisci quia explicabo facere sint, aliquid perferendis facilis esse ipsum et dolor obcaecati deserunt. Ad, illum. Illum facere harum ducimus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel adipisci quia explicabo facere sint, aliquid perferendis facilis esse ipsum et dolor obcaecati deserunt. Ad, illum. Illum facere harum ducimus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel adipisci quia explicabo facere sint, aliquid perferendis facilis esse ipsum et dolor obcaecati deserunt. Ad, illum. Illum facere harum ducimus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel adipisci quia explicabo facere sint, aliquid perferendis facilis esse ipsum et dolor obcaecati deserunt. Ad, illum. Illum facere harum ducimus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel adipisci quia explicabo facere sint, aliquid perferendis facilis esse ipsum et dolor obcaecati deserunt. Ad, illum. Illum facere harum ducimus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel adipisci quia explicabo facere sint, aliquid perferendis facilis esse ipsum et dolor obcaecati deserunt. Ad, illum. Illum facere harum ducimus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vel adipisci quia explicabo facere sint, aliquid perferendis facilis esse ipsum et dolor obcaecati deserunt. Ad, illum. Illum facere harum ducimus.
            </div>
            <div class="col-4">
                <div class="card-deck mt-5">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Titre du post / Article</h5>
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-secondary"><i class="fa fa-briefcase" style="font-size:20px;"></i>Auteur</li>
                                <li class="list-group-item list-group-item-secondary"><i class="fa fa-user" style="font-size:20px;"></i>Date de création du post</li>
                                <li class="list-group-item list-group-item-secondary"><i class="fa fa-map-marker" style="font-size:20px;"></i>Type de contenu</li>
                                <li class="list-group-item list-group-item-secondary"><i class="fa fa-clock-o" tyle="font-size:20px;"></i>Temps de lecture</li>
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
    name: 'ArticleComponent'
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

</style>