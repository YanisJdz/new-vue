<template>
    <div class='container d-flex flex-column'>
        <div class="admin-panel d-flex flex-column">
            <h1 class="mb-3 mt-3">Vue Admin</h1>
            <input type="text" v-model="author" placeholder="Author">
            <input type="text" v-model="title" placeholder="Title">
            <textarea v-model="description" name="description" id="1" cols="1" rows="2" placeholder="Description of the article"></textarea>
            <textarea v-model="content" name="content" id="" cols="30" rows="10" placeholder="Content of the article goes right here"></textarea>
            <button type="submit">Add article</button>
        </div>
        <div class="preview-article">
            <h2 class="mt-3 mb-3">Article Preview</h2>
            <h2>{{ author }}</h2>
            <h3>{{ title }}</h3>
            <p class='articleDescription'></p>
            <p class='articleContent'></p>
            
        </div>
    
    </div>
</template>

<script>
export default {
    name: 'Admin',
    data() {
        return {
            title: '',
            author: '',
            description: '',
            content: '',

        }
    },
}
</script>

<style>

</style>