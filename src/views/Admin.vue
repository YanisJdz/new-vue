<template>
<div class="admin">
    <div>
        <button v-for="(page,index) in pages" :key="index" 
        @click="currentPage = index">
        {{page.buttonName}}
        </button>
    </div>
    <div>
        <component :is="computedPage"/>
    </div>
</div>
</template>

<script>

import AdminAddComponent from '../components/AdminAddComponent.vue'
import AdminModifyComponent from '../components/AdminModifyList.vue'
export default {

    name: 'Admin',
    data(){
       return{
           currentPage: 0,
           pages:[
               {
                    name:'AdminAddComponent',
                    compo: AdminAddComponent,
                    buttonName:'Ajouter un article'
               },
               {
                    name:'AdminModifyComponent',
                    compo: AdminModifyComponent,
                    buttonName:'Modifier ou supprimer un article'
               }
           ]
       }
   },
   computed:{
       computedPage(){
           return this.pages[this.currentPage].compo
       }
   }
}
</script>

<style scoped>
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
    margin-bottom: 0px;
    text-decoration: underline #001252;
}

</style>