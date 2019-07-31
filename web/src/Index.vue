<template>
    <div>
        <Header/>
        <Banner id="banner" />
        <Csv id="sobre" />
        <Competencias id="habilidades" />
        <Proj id="projetos"/>
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
import Proj from "@/components/Projetos";
import Competencias from "@/components/Competencias";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default {
    components:{
       Header,
       Banner,
       Csv,
       Proj,
       Competencias,
       Contato,
       Footer
    },
    mounted(){
        this.initial();
    },
    methods:{
        async initial(){
            
            let ipReq = await fetch('https://api.ipify.org?format=jsonp&callback=?');
            const ipSocial = await ipReq.text();
            const array = ipSocial.split(":",3);
            let ipAr = array[1].split("}",3);
            let ip = ipAr[0].replace(/["|']/g,"");

            let req = await fetch(`http://149.56.185.80:8084/api/visita/${ip}`);
            const res = await req.json();
            console.log(res);

            console.log("ao todo o site recebeu "+res.visitas+" visitas ");
            res.ips.forEach(e => {
                console.log(" Os ips que visitaram o site "+ e.ip);
            });
            

        }
    },
    name:"Index"
}
</script>

<style>

</style>
