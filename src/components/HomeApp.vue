<template>
    <div class="assing">
        <div class="header d-flex">
            <img class="image" src="../components/Login/Company_logo.svg" alt="">
            <ul class="header__ul d-flex">
                <li><a href="">UseCases</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href=""><router-link to="/home">Blog</router-link></a></li>
            </ul>
            <div class="header__button">
                <a href=""  style="margin-right:40px; color:white"><router-link to="/login">Login</router-link></a>
                <button class="rounded-3" ><a href="/login" style="color:white"><router-link style="color:white" to="/">Sign Up</router-link></a></button>
            </div>
            <div>
                <img src="./Login/home-page.svg" alt="">
            </div>
        </div>
       
    </div>
</template>
<script setup>
    
</script>
<style scoped>
.assing{
    width: 100vh;
    height: 120px;
    background-color: black;
}
.header{
    display: flex;
    align-items: center;
    justify-content: center;
}
.image{
    width: 196px;
height: 56px;
margin-top: 49px;
}
.header__ul{
    text-decoration: none;
    list-style: none;
    gap: 40px;
    margin-top: 65px;
    margin-left: 50px;
}
.header__button{
    margin-left: 200px;
    margin-top: 49px;
}
button{
    width: 119px;
    height: 55px;
    background: #306EF7;
    border: none;
}
</style>