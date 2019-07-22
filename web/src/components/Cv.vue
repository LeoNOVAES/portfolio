<template >
<div  class="container-fluid" style="padding-left:5%; margin-top:5%" >
    <div class="row">
        <div class="col-lg imageCv">
            <img src="../assets/cv.png" class="" alt="Responsive image" width="110%;" />
        </div>
        <div class="col-lg textCv" style="padding-left: 10.5%;">
            <h1 style="margin-bottom: 30px; font-size: 40pt;">Quem Sou?</h1>
                <p>Full stack developer. Tive início na carreira de análise e desenvolvimento de sistemas em 2017 quando descobri um vício. Meu primeiro emprego foi em uma startup de nutrição, que o proporcionou um alavancamento na entrada do mercado, a partir daí começou com projetos como Websites, Aplicativos, Sistemas, adquirindo um grande conhecimento nas diversas tecnologias utilizadas no mercado. 
                </p>
            <a href="http://149.56.185.80:8084/api/download" download class="btn down">DOWNLOAD CV</a>
        </div>
      
    </div>
</div>  
</template>

<script>
export default {

}
</script>

<style>
.curriculo{
    margin-left:20%
}
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



.textCv p {
    width: 30em;
    word-wrap: break-word;
    text-align: justify;
    font-size: 15pt;
}

@media screen and (max-width: 700px){
.textCv p {
    width: 18em;
    word-wrap: break-word;
    text-align: justify;
    font-size: 13pt;
}

}
</style>
