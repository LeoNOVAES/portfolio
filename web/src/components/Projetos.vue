<template>
<div class="container" style="padding-bottom:4%">
    <div class="row">
       <div class="col-sm-12" style="padding-top: 10%; padding-bottom: 4%; text-align:center">
            <h2>MEUS PROJETOS RECENTES</h2>
            <p>Para ver mais projetos acesse meu  <a target="_blank" href="https://github.com/LeoNOVAES" >Github</a></p>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4" v-for="(project,key) in projects" :key="key">
            <div class="card" style="width: 22rem; ">
            <img class="card-img-top" :src="project.url"  alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ project.titulo }}</h5>
                <p class="card-text">{{ project.desc }}</p>
            </div>
            <div class="list-group list-group-flush">
                <div class="list-group-item itemPro"><p id="esp" style="font-weight:bold">{{project.tecnologias.back}}</p><p class="bg-secondary" style="color:#ffffff; border-radius:5px; padding:3px; font-size:10pt">Back-end</p></div>
                <div class="list-group-item itemPro"><p  id="esp" style="font-weight:bold">{{project.tecnologias.front}}</p><p class="bg-info" style="color:#ffffff; border-radius:5px;padding:3px; font-size:10pt">Front-end</p></div>
                <div class="list-group-item itemPro"><p  id="esp" style="font-weight:bold">{{project.tecnologias.bd}}</p><p class="bg-danger" style="color:#ffffff; border-radius:5px; padding:3px; font-size:10pt">Data Base</p></div>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            projects:[
                {
                    titulo:"Acv Link",
                    url:require('../assets/acv.png'),
                    desc:"Plataforma feita para salvamento e uploads de links, videos ou fotos",
                    tecnologias:{
                        back:'NODE JS',
                        front:'VUE',
                        bd:'MYSQL'
                    }
                },
                {
                    titulo:"Search Any",
                    url:require('../assets/search.png'),
                    desc:"Plataforma com fins acadêmicos, para busca de qualuqer assunto",
                    tecnologias:{
                        back:'NODE JS',
                        front:'VUE',
                        bd:'Integração com APIS comerciais'
                    }
                }
            ]
        }    
    }
}
</script>

<style>
.itemPro{
    display:flex;
    flex:1;
    flex-direction: row;
    justify-content: space-between
}

#esp{
    width: 10em;
    word-wrap: break-word;
        
}
</style>
