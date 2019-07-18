<template>
<div class="container" >
    <div class="row">
        <div class="col-sm-12 comp" style="left:60px; top:-30px">
            <h1 style=" font-weight: bolder;font-size: 20pt">MINHAS COMPETÊNCIAS</h1> 
        </div>
        <div class="col-sm-12 comp" style="left:60px; top:-30px; margin-bottom:4%">
             <p style="color:#777777">
                Pode dar pode semelhança feita espírito que produz um si mesmo juntos depois que o mar 
             </p>
        </div>
    </div>
    <div class="row">
        <b-navbar toggleable="lg" class="navbar navbar-light" style="color:red" >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav class="competenciasNav">
            <b-navbar-nav style="padding-bottom:30px">
                <b-nav-item href="#" class="item">Back End</b-nav-item>
                <b-nav-item href="#" class="item">Front End</b-nav-item>
                <b-nav-item href="#" class="item">Javascript</b-nav-item>
                <b-nav-item href="#" class="item">Banco de Dados</b-nav-item>
                <b-nav-item href="#" class="item">Mobile</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>  
    <div class="row" style="">
        <div style="padding-bottom:4%;"  class="col-sm cardsF" v-for="(tec, key) in competencias" :key="key">
            <a class="card compet text-dark mb"  style="max-width: 18rem; background-color:#f7f7f7" >
                <div class="card-body" style="height:400px">
                    <div style="display:flex; justify-content: center; padding-top:10px; padding-bottom:15px" ><img   width="90px" height="80px" :src="tec.url"  /></div>
                    <h5 class="card-title" style="text-align:center">{{tec.nome}}</h5>
                    <div class="card-text">
                        <p class="card-text" style="color:#808080; width: 15em; word-wrap: break-word; text-align:justify">{{ tec.desc }}</p>
                    </div>
                </div>
            </a>
        </div> 
    </div>
</div>  
</template>

<script>
export default {
    data(){
        return {
            competencias:{
                node:{
                    nome:"Node JS",
                    url : require("../assets/NODE.png"),
                    categoria:"js and back",
                    desc:"Node.js é um interpretador, com código aberto, de código JavaScript de modo assíncrono e orientado a eventos, focado em migrar a programação do Javascript do lado do cliente para os servidores."
                },
                golang:{
                    nome:"Golang",
                    url:require("../assets/golang.png"),
                    categoria:"backend",
                    desc:"Go é uma linguagem de programação criada pela Google e lançada em código livre em novembro de 2009. É uma linguagem compilada e focada em produtividade e programação concorrente, baseada em trabalhos feitos no sistema operacional chamado Inferno."
                },
                laravel:{
                    nome:"Laravel",
                    url:require("../assets/laravel.png"),
                    categoria:"backend",
                    desc:""
                },
                php:{
                    nome:"PHP",
                    url:require("../assets/php.png"),
                    categoria:"backend",
                    desc:""
                },
                spring:{
                    nome:"Spring Boot",
                    url:require("../assets/spring.png"),
                    categoria:"backend",
                    desc:""
                },
                java:{
                    nome:"JAVA",
                    url:require("../assets/java.png"),
                    categoria:"backend and mobile   ",
                    desc:""
                },
                vue:{
                    nome:"Vue JS",
                    url:require("../assets/vue.png"),
                    categoria:"js and front",
                    desc:""
                },
                reactNative:{
                    nome:"React Native",
                    url:require("../assets/react.png"),
                    categoria:"js and mobile",
                    desc:""
                },
                js:{
                    nome:"JavaScript",
                    url:require("../assets/js.png"),
                    categoria:"js and front",
                    desc:""
                },
                bootstrap:{
                    nome:"Bootstrap",
                    url:require("../assets/bootstrap.png"),
                    categoria:"frontend",
                    desc:""
                },
                git:{
                    nome:"Git",
                    url:require("../assets/git.png"),
                    categoria:"outros",
                    desc:""
                },
                mysql:{
                    nome:"Mysql",
                    url:require("../assets/mysql-2.svg"),
                    categoria:"bd",
                    desc:""
                },
                mongodb:{
                    nome:"Mongo DB",
                    url:require("../assets/mongodb.svg"),
                    categoria:"bd",
                    desc:""
                },
                firebase:{
                    nome:"Firebase",
                    url:require("../assets/fire.svg"),
                    categoria:"bd",
                    desc:""
                },
                ubuntu:{
                    nome:"Ubuntu",
                    url:require("../assets/ubuntu.svg"),
                    categoria:"so",
                    desc:""
                }
            }
        }
    }
}
</script>

<style>
.comp{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.compet{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    
}
.compet:hover{
     box-shadow: 0px 15px 30px rgba(77, 87, 222, 0.3);

}

.item{
    font-weight:bold;
    padding-right:40px;
    color:red 
}

</style>
