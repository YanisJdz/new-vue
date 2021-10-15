<template>
<div>
  <AdminModifyComponent :id="$route.params.id"/>
</div>
</template>

<script>
import AdminModifyComponent from '../components/AdminModifyComponent.vue'
export default {
computed: {
    getArticles(){
        return this.$store.state.articles
    }
},
    components:{
        AdminModifyComponent
    }
}
</script>

<style>

</style>