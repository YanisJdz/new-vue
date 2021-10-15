<template>
  <div class="links">
    <h1>Links</h1>

    <div class ="link-box">
      <h4 class = "link-name">First link :</h4>
      <a href="#" class ="link-btn btn btn-primary"> This link lead to nowhere...</a>
    </div>

    <div class ="link-box">
      <h4 class = "link-name">Second  link :</h4>
      <a href="#" class ="link-btn btn btn-primary"> This link lead to nowhere...</a>
    </div>

    <div class ="link-box">
      <h4 class = "link-name">Third link :</h4>
      <router-link to="/admin" class ="link-btn btn btn-primary"> This link lead to nowhere...</router-link>
    </div>

  </div>
</template>

<style scoped>
h1{
  
  margin-top: 2%;
}
.link-box{
  margin-top: 3%;
}
.link-btn{
  text-align: start;
  margin-left: 2%;
  margin-right: 2%;
  display: flex;
}
.link-name{
    font-size: clamp(12px, 1.5vw, 18px);
    display: flex;
    margin-left: 2%;
    margin-top: 10px;
    margin-bottom: 3x;
    text-decoration: underline #001252;
}
</style>
