<template>
    <nav class="navbar navbar-expand-lg sticky-top bg-light">
        <div class="container-fluid">
        <h1>THE NEW-VUE</h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">BLOG</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">ABOUT</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/links">LINKS</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contact">CONTACT</router-link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>
 
<script>
export default {
    name: 'Header',
}
</script>

<style scoped>

nav {
    height: 87px;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.16);
    line-height: 34px;
    letter-spacing: 2px;
    padding-top: 0;
    padding-bottom: 0;
}
.container-fluid {
    height: 100%;
    background-color: #F6F8FF;
}

.nav-link {
    font-family: "Roboto";
    font-size: 20px;
    color: black;
    height: 100%;
}

.nav-link:hover {
    color: #505794;
}

.nav-link:focus {
    color: black;
}

#navbarNav {
    justify-content: end;
    margin-right: 10%;
}

.nav-item {
    margin-right: 5%;
    transition: all 3s ease-out;
}

.router-link-exact-active {
    border-bottom: 2px solid black;
}

.container-fluid {
    text-align: center;
}

h1 {
    font-family: "Secular One";
    margin: 0;
    text-align: center;
    line-height: 61,2px;
    letter-spacing: 5px;
    color: #001252;
    margin-left: 5%
}

</style>