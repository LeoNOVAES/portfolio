<template>
<div class=" banner">
    <div class="row">
        <div class="col-sm" style="font-weight:bolder; left:5%;margin-top:5%">
            <h2>BEM VINDO </h2>
            <h1 style="font-size:40pt">EU SOU LEANDRO NOVAES</h1>
            <h3>DESENVOLVEDOR FULL-STACK</h3>
            <div style="margin-top:5%">
                <a style="margin-right:10px; padding-right:30px; padding-left:30px; padding-top:18px; padding-bottom:18px; margin-bottom:10px" class="btn contrate" href="#contato">CONTRATE-ME</a>
                <a href="http://149.56.185.80:8084/api/curriculo" target="_blank" style="margin-right:10px; padding-right:30px; padding-left:30px; padding-top:18px; padding-bottom:18px; margin-bottom:10px" class="btn cv" >CURRICULO</a>
            </div>
        </div>
        <div class="col-sm image" style="left:60px; top:-30px">
            <img src="../assets/banner.png" />
        </div>
    </div>
</div>  
</template>

<script>

export default {

    components:{
    },
    data(){
        return{
        }
    }
}
</script>

<style>
.banner{
    padding:5%
}

.contrate{
    background-image: linear-gradient(to bottom, #FF6347 130%);
    color:#ffffff;
    font-weight: bold
}

.contrate:hover{
    background: #ffffff;
    border:2px solid #FF6347;
}

.cv{
    border:2px solid #FF6347;
    font-weight:bold;
}

.cv:hover{
    background-image: linear-gradient(to bottom, #FF6347 130%);
    color:#ffffff;
    font-weight: bold;
}

@media screen and (max-width: 1126px) {
    .image{
        display: none
    }
}


</style>
