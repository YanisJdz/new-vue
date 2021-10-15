<template>
  <div class="home">
    <div class="container d-flex justify-content-center flex-column">
      <h1>BLOG</h1>
      <p class="sub-baseline">We don’t just design and develop. Sometimes we also write down words. Here we share our
        insights and findings from our daily work at Fintory.</p>
      <div class="d-flex justify-content-center">
        <input @keyup.enter="getArticle" v-model="searchInput" class="form-control me-2" type="searcg"
          placeholder="Search for article" aria-label="Search">
      </div>
      <ArticleList />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src 
  import ArticleList from '@/components/ArticleList.vue'


  export default {
    name: 'Home',
    components: {
      ArticleList
    },
    data() {
      return {
        searchInput: ''
      }
    },
    methods: {
      getArticle() {
        for (let i = 0; i < document.getElementsByClassName('article-title').length; i++) {
          document.getElementsByClassName('article-title')[i].parentNode.parentNode.style.display = ""
          if (!document.getElementsByClassName('article-title')[i].innerHTML.toLowerCase().includes(this.searchInput
              .toLowerCase())) {
            document.getElementsByClassName('article-title')[i].parentNode.parentNode.style.display = "none";
          }
        }
      },
      
    },
  }
</script>

<style scoped>
  .home {
    width: 100%;
    background-color: #F6F8FF;
  }

  h1 {
    margin-top: 0.7em;
    font-size: clamp(28px, 4vw, 74px);
    letter-spacing: 4px;
    color: #010B2E;
    margin-bottom: 0.4em;
  }

  .sub-baseline {
    font-size: clamp(12px, 1.5vw, 18px);
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 3em
  }

  @media (min-width: 712px) {
    h1 {
      margin-top: 0.5em;
    }
  }

  .d-flex {
    margin-bottom: 4em;
  }

  .d-flex input {
    width: 490px;
    height: 51px;
    border: 1px solid rgba(1, 11, 46, 0.28);
    box-sizing: border-box;
    border-radius: 161px;
  }
</style>