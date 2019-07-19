<template>
    <div>
        <Header/>
        <Banner id="banner" />
        <Csv id="sobre" />
        <Competencias id="habilidades" />
        <div class="container">
            <Contato id="contato" />
        </div>
        <Footer/>
    </div>
      
</template>

<script>
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Csv from "@/components/Cv";
import Competencias from "@/components/Competencias";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default {
    components:{
       Header,
       Banner,
       Csv,
       Competencias,
       Contato,
       Footer
    },
    name:"Index"
}
</script>

<style>

</style>
