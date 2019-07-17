<template>
<div class="container" style="margin-bottom:200px">
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
        <b-navbar toggleable="lg" class="navbar-default bg-default" >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav class="competenciasNav">
            <b-navbar-nav >
                <b-nav-item href="#" style="font-weight:bold; ">Javascript</b-nav-item>
                <b-nav-item href="#" style="font-weight:bold; ">Back End</b-nav-item>
                <b-nav-item href="#" style="font-weight:bold; ">Front End</b-nav-item>
                <b-nav-item href="#" style="font-weight:bold; ">Banco de Dados</b-nav-item>
                <b-nav-item href="#" style="font-weight:bold; ">Mobile</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>  
    <div class="row" style="">
        <div class="col-sm cardsF">
            <a class="card compet text-dark mb" style="max-width: 18rem; background-color:#F5FFFA">
                <div class="card-body" style="">
                    <div style="display:flex; justify-content: center; padding-top:10px; padding-bottom:15px" ><img  src="../assets/js.png" width="100px"/></div>
                    <h5 class="card-title" style="text-align:center">Javascript</h5>
                    <p class="card-text" style="color:#808080">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </a>
        </div> 
         <div class="col-sm cardsF">
            <a class="card compet text-dark mb" style="max-width: 18rem; background-color:#F5FFFA">
                <div class="card-body" style="">
                    <div style="display:flex; justify-content: center; padding-top:10px; padding-bottom:15px" ><img  src="../assets/js.png" width="100px"/></div>
                    <h5 class="card-title" style="text-align:center">Javascript</h5>
                    <p class="card-text" style="color:#808080">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </a>
        </div> 
         <div class="col-sm cardsF">
            <a class="card compet text-dark mb" style="max-width: 18rem; background-color:#F5FFFA">
                <div class="card-body" style="">
                    <div style="display:flex; justify-content: center; padding-top:10px; padding-bottom:15px" ><img  src="../assets/js.png" width="100px"/></div>
                    <h5 class="card-title" style="text-align:center">Javascript</h5>
                    <p class="card-text" style="color:#808080">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </a>
        </div> 
         <div class="col-sm cardsF">
            <a class="card compet text-dark mb" style="max-width: 18rem; background-color:#F5FFFA">
                <div class="card-body" style="">
                    <div style="display:flex; justify-content: center; padding-top:10px; padding-bottom:15px" ><img  src="../assets/js.png" width="100px"/></div>
                    <h5 class="card-title" style="text-align:center">Javascript</h5>
                    <p class="card-text" style="color:#808080">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                    url :"../assests/NODE.png"
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

</style>
