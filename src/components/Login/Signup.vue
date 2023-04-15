<template>
    <div class="assing">
        <div class="header d-flex">
            <img class="image" src="./Company_logo.svg" alt="">
            <ul class="header__ul d-flex">
                <li><a href="">UseCases</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href=""><router-link to="/home">Blog</router-link></a></li>
            </ul>
            <div class="header__button">
                <a href=""  style="margin-right:40px; color:white"><router-link to="/login">Login</router-link></a>
                <button class="rounded-3" ><a href="/login" style="color:white">Sing Up</a></button>
            </div>
        </div>
        <div class="sign__up">
            <h1>Sign Up</h1>
            <p>Fill all field for create an account.</p>
        </div>
        <div class="btn1">
            <img class="user1" src="./Username.svg" alt="">
            <img class="user2" src="./Email_address.svg" alt="">
        </div>
        <div class="btn2">
            <img class="user3" src="./Password.svg" alt="">
            <button class="rounded-3" style="width: 300px;" ><a href="" style="color:white">Sing Up</a></button>
        </div>
        <div>
            <h4 class="or" style="margin: 15 auto ;">Or</h4>
            <p class="or__p " style="margin:0 auto">Sign up with...</p>
        </div>
        <div class="btn3" style="margin-left: 300px; margin-top:50px">
            <a href="https://www.google.pl/"><img style="width: 300px; margin-top:10px;margin-left:180px; height:100px" src="./Facebook.svg" alt=""></a>
            <a href="https://www.google.pl/"><img style="width: 300px; margin-top:10px; margin-left:15px; height:100px" src="./Google.svg" alt=""></a>
            <a href="https://appleid.apple.com/"><img style="width: 300px; margin-top:10px; margin-left:15px; height:100px" src="./Apple.svg" alt=""></a>
        </div> 
    </div>
</template>
<script setup>
 
</script>
<style scoped>
.assing{
    width: 100%;
    height: 900px;
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

.sign__up h1{
    font-weight: 600;
margin: 0 auto;
/* identical to box height, or 149% */
width: 286px;
height: 112px;
margin-top: 50px;
color: #FFFFFF;
}
.sign__up p{
    width: 395px;
height: 36px;
font-weight: 400;
font-size: 24px;
line-height: 36px;
/* identical to box height, or 150% */
color: #FFFFFF;
margin: 0 auto;
}
.btn1{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
}
.btn2{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}
.user1{
    width: 300px;
height: 52px;
margin-right: 100px;
margin-bottom: 20px;
}
.user2{
    width: 300px;
height: 52px;
margin-top: -20px;
}
.user3{
    width: 300px;
height: 52px;
margin-right: 100px;
}
.or{
    width: 65px;
height: 81px;
font-weight: 600;
font-size: 54px;
line-height: 81px;
margin:50px auto 0 auto ;
color: #FFFFFF;
}
.or__p{
    width: 161px;
height: 36px;
font-weight: 400;
font-size: 24px;
line-height: 36px;
margin-top:15px;
margin-left: 580px;
color: #FFFFFF;
}
</style>