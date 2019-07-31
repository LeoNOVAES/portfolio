<template>
<div class="container" style="padding-bottom:4%">
    <div class="row">
       <div class="col-sm-12" style="padding-top: 10%; padding-bottom: 4%; text-align:center">
            <h2>MEUS PROJETOS RECENTES</h2>
            <p>Para ver mais projetos acesse meu  <a target="_blank" href="https://github.com/LeoNOVAES" >Github</a></p>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 projects" v-for="(project,key) in projects" :key="key">
            <div class="card" style="width: 22rem; ">
            <div>    
                <div class="imgProj"><h5 class="card-title">{{ project.titulo }}</h5><a class="btn btn-light" id="btnProj" :href="project.link" target="_blank">Visite o Site</a></div>
                <a :href="project.link" target="_blank"><img class="card-img-top"  :src="project.url"  alt="Card image cap"></a>
            </div>
            <div class="card-body">
                
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
                    link:"http://149.56.185.80:8083/",
                    url:require('../assets/acv.png'),
                    desc:"Plataforma feita para salvamento e uploads de links, videos ou fotos",
                    tecnologias:{
                        back:'NODE JS',
                        front:'VUE JS',
                        bd:'MYSQL'
                    }
                },
                {
                    titulo:"Search Any",
                    link:"http://149.56.185.80:7000/",
                    url:require('../assets/search.png'),
                    desc:"Plataforma com fins acadêmicos, para busca de qualquer assunto",
                    tecnologias:{
                        back:'NODE JS',
                        front:'VUE JS',
                        bd:'APIS Externas'
                    }
                },
                {
                    titulo:"Biblioteca Virtual",
                    link:"https://github.com/LeoNOVAES/biblioteca",
                    url:require('../assets/bibli.png'),
                    desc:"Biblioteca Virtual, um projeto acadêmicos para emprestimo de livros",
                    tecnologias:{
                        back:"GOLANG",
                        front:"BOOTSTRAP E CSS",
                        bd:"MYSQL"
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

.imgProj{
    background-color: rgba(255, 71, 0, 0.8);
    position:absolute;
    width:100%;
    height: 41%;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}

.projects:hover .imgProj{
    opacity: 1;
    transition: 0.5s ease;
}

.projects:hover{
     box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
}

.imgProj h5{
    color:#ffffff;
    font-size: 25pt
}

#btnProj:hover{
    background-color:#ffffff;
    color:rgba(255, 71, 0, 1);
    border:2px solid rgba(255, 71, 0, 1);
}

#btnProj{
    border-radius: 13px;
    padding:15px;
    background-color:rgba(255, 71, 0, 1);
    color:#ffffff
}
</style>
