<template>
<div class="container-fluid" id="habilidades" style="padding-left:5%">
    <div class="row">
       <div class="titleContato col-sm-12" style="padding-top: 10%; padding-bottom: 3%;">
            <h3>MINHAS COMPETÊNCIAS</h3>
            <p>Você precisa de um sistema fácil de utilizar, totalmente gerenciável e com bom custo benefício.</p>
        </div>
    </div>
    <div class="row">
        <b-navbar toggleable="lg" class="navbar navbar-light" >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav class="competenciasNav">
            <b-navbar-nav style="padding-bottom:30px">
                <b-nav-item href="#" @click="setCondition('all')" class="item">Todos</b-nav-item>
                <b-nav-item href="#" @click="setCondition('front')" class="item">Front End</b-nav-item>
                <b-nav-item href="#" @click="setCondition('back')" class="item">Back End</b-nav-item>
                <b-nav-item href="#" @click="setCondition('bd')" class="item">Banco de Dados</b-nav-item>
                <b-nav-item href="#" @click="setCondition('mob')" class="item">Mobile</b-nav-item>
                <b-nav-item href="#" @click="setCondition('outros')" class="item">Outros</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>  
    <div class="row" style="">
            <transition name="slide-fade"  v-for="(tec, key) in render" :key="key">
            <div style="padding-bottom:4%;" class="col-lg-3 cardsF" >
                <a class="card compet text-dark mb"    >
                    <div class="card-body">
                        <div style="display:flex; justify-content: center; padding-top:10px; padding-bottom:15px" ><img   width="90px" height="80px" :src="tec.url"  /></div>
                        <h5 class="card-title" style="text-align:center">{{tec.nome}}</h5>
                        <div class="card-text">
                           
                        </div>
                    </div>
                </a>
            </div>
            </transition>
    </div>
</div>  
</template>

<script>
export default {
    data(){
        return {
            todos:true,
            catGlobal:"all",
            render:[],
            competencias:[
                {
                    nome:"Node JS",
                    url : require("../assets/NODE.png"),
                    categoria:"back",
                    desc:""
                },
               {
                    nome:"Golang",
                    url:require("../assets/golang.png"),
                    categoria:"back",
                    desc:""
                },
               {
                    nome:"Laravel",
                    url:require("../assets/laravel.png"),
                    categoria:"back",
                    desc:"Laravel é um framework PHP livre e open-source, Comecei meus estudos em 2019 devido a freelancer."
                },
                {
                    nome:"PHP",
                    url:require("../assets/php.png"),
                    categoria:"back",
                    desc:"Linguagem interpretada livre, a  primeira linguagem estudada por mim, por meio de um curso chamado PHP do zero ao profissional com Professor Bonieky."
                },
                {
                    nome:"Spring Boot",
                    url:require("../assets/spring.png"),
                    categoria:"back",
                    desc:"O Spring é um framework open source para a plataforma Java, comecei meus estudos em 2019 por meio de um curso da udemy."
                },
                {
                    nome:"JAVA",
                    url:require("../assets/java.png"),
                    categoria:"back",
                    desc:"Linguagem de programação orientada a objetos, Comecei meus estudos em 2017 por meio do curso em video e aulas da faculdade, posteriormente fiz outros cursos de java na udemy."
                },
                {
                    nome:"Vue JS",
                    url:require("../assets/vue.png"),
                    categoria:"front",
                    desc:"Framework JS front-end, Comecei meus estudos nessa tecnologia em 2018 por meio de um curso da C3DER."
                },
                {
                    nome:"React Native",
                    url:require("../assets/react.png"),
                    categoria:"mob",
                    desc:"React Native é uma biblioteca Javascript para desenvolvimento de apps mobile, Comecei meus estudos em 2018 por meio do curso React Native do zero ao profissional com o professor Bonieky."
                },
                {
                    nome:"JavaScript",
                    url:require("../assets/js.png"),
                    categoria:"front",
                    desc:"Uma das Primeiras tecnologias estuda por mim, inicialmente estudei Javascript puro em 2017."
                },
                {
                    nome:"Bootstrap",
                    url:require("../assets/bootstrap.png"),
                    categoria:"front",
                    desc:" é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript"
                },
                {
                    nome:"Git",
                    url:require("../assets/git.png"),
                    categoria:"outros",
                    desc:"Git é um sistema de controle de versões distribuído, comecei meu estudo em git em 2017 por meio da udemy e documentação."
                },
                {
                    nome:"Mysql",
                    url:require("../assets/mysql-2.svg"),
                    categoria:"bd",
                    desc:"O MySQL é um sistema de gerenciamento de banco de dados, Comecei meus estudos em 2017 por meio de cursos no youtube, curso em video e faculdade."
                },
                {
                    nome:"Mongo DB",
                    url:require("../assets/mongodb.svg"),
                    categoria:"bd",
                    desc:"MongoDB é um software de banco de dados orientado a documentos livre, Comecei meus estudos em 2018 por meio da udemy e documentação."
                },
                {
                    nome:"Firebase",
                    url:require("../assets/fire.svg"),
                    categoria:"bd",
                    desc:"O Firebase é uma plataforma de desenvolvimento, hioje consigo integrar minhas aplicações com o firebase graças a sua documentação e algusn cursos no youtube."
                },
                {
                    nome:"Ubuntu",
                    url:require("../assets/ubuntu.svg"),
                    categoria:"outros",
                    desc:"Ubuntu é um sistema operacional ou sistema operativo de código aberto, construído a partir do núcleo Linux, Hoje utilizo essa distro para servir minha aplicações e trabalhar localmente."
                }
            ]
        }
    },
    mounted(){
        this.setCondition('all');
    },
    methods:{
        setCondition(c){
            
            switch(c){
                case 'all':
                    this.$data.render = this.$data.competencias.map((e)=>{
                        return e;
                    });
                    
                break;
                case 'back':
                    this.$data.render = this.$data.competencias.filter((e)=>{
                        return e.categoria == 'back';
                    });
                break;
                case 'front':
                    this.$data.render = this.$data.competencias.filter((e)=>{
                        return e.categoria == 'front';
                    });
                break;
                    case 'mob':
                        this.$data.render = this.$data.competencias.filter((e)=>{
                            return e.categoria == 'mob' || e.nome == "JAVA";
                        });
                break;
                case 'bd':
                    this.$data.render = this.$data.competencias.filter((e)=>{
                        return e.categoria == 'bd';
                    });
                break;
                case 'outros':
                    this.$data.render = this.$data.competencias.filter((e)=>{
                        return e.categoria == 'outros';
                    });
                break;

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
    max-width: 18rem; 
    background-color:#f7f7f7
    
}
.compet:hover{
     box-shadow: 0px 15px 30px rgba(77, 87, 222, 0.3);

}

.item{
    font-weight:bold;
    padding-right:40px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

@media screen and (max-width: 700px){
    .compet {
        max-width: 23rem; 
    
    }

}

</style>
