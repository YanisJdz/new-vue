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