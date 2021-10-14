<template>
    <div class="header_container nav d-flex flex-row">
        <h1 id="title">THE NEW VUE</h1>
        <ul class="d-flex flex-row">
            <li class="nav-item">
                <router-link class="nav-link" to="/">BLOG</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">ABOUT</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">LINKS</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">CONTACT</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HeaderPreview',
}
</script>

<style scoped>
    .header_container{
        width: 100%;
        background-color: #F6F8FF;
        justify-content: space-evenly;
        align-items: center;
        border-bottom: 1px solid rgb(167, 167, 167);
    }
    li {
        list-style: none;
    }
    .nav-link{
        color: black;
    }
    h1{
        justify-self: flex-start;
    }
    
</style>