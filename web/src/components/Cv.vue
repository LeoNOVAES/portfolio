<template >
<div  class="container " style="margin-left:20%">
    <div class="row">
        <div class="col-sm image" style="left:60px; top:-30px">
            <img src="../assets/cv.png" width="120%;" style="margin-left:-30%"/>
        </div>
        <div class="col-sm" style="margin-top:-30px;margin-left:3%">
            <h1 style="margin-bottom:30px; font-size:40pt">Quem Sou?</h1>
            <p style="width: 21em; word-wrap: break-word; text-align:justify">Full stack developer. Tive início na carreira de análise e desenvolvimento de sistemas em 2017 quando descobri um vício. Meu primeiro emprego foi em uma startup de nutrição, que o proporcionou um alavancamento na entrada do mercado, a partir daí começou com projetos como Websites, Aplicativos, Sistemas, adquirindo um grande conhecimento nas diversas tecnologias utilizadas no mercado. 
            </p>
            <a href="http://localhost:8084/api/download" download class="btn down">DOWNLOAD CV</a>
        </div>
      
    </div>
</div>  
</template>

<script>
export default {

}
</script>

<style>
.cvd{
    padding:5%
}

.down{
    padding:20px; 
    font-weight:bold;
    background-color: #FF6347;
    color:#ffffff
}

.down:hover {
    background: #ffffff;
    border:2px solid #FF6347;
}

@media screen and (max-width: 1126px) {
    .image{
        display: none
    }
}


</style>
