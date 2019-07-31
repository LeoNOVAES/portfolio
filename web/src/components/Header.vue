<template>
<div>
  <b-navbar toggleable="lg" class="navbar-default bg-default"  style="padding-left:15%; margin-top:-20px">
    <b-navbar-brand href="#"><img src="../assets/logo.png"  width="70%" /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="bodyMenu">
      <b-navbar-nav  style="padding-left:25%">
        <b-nav-item  style="font-weight:bold; padding-right:10%"  @click="scroll()">Home</b-nav-item>
        <b-nav-item  style="font-weight:bold; padding-right:10%"  @click="scroll('sobre')">Sobre</b-nav-item>
        <b-nav-item  style="font-weight:bold; padding-right:10%"  @click="scroll('compet')">Habilidades</b-nav-item>
        <b-nav-item  style="font-weight:bold; padding-right:10%"  @click="scroll('projetos')">Projetos</b-nav-item>
        <b-nav-item style="font-weight:bold; padding-right:10%" @click="scroll('contato')" > Contato</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
 export default{ 
  data(){
    return{

    }
  },
  methods:{
    scroll(page){

      switch(page){
        case 'projetos':
          window.scroll({top: 2900, left: 0, behavior: 'smooth' });
          break;
        case 'contato':
          window.scroll({top: 3700, left: 0, behavior: 'smooth' });
          break;
        case 'compet':
          window.scroll({top: 1680, left: 0, behavior: 'smooth' });
          break;
        case 'sobre':
          window.scroll({top: 900, left: 0, behavior: 'smooth' });
          break;
        default:
          window.scroll({top: 1, left: 0, behavior: 'smooth' });
          break;      
      }
      
    } 
  }
 }
</script>

<style>
.bodyMenu{
  font-size: 16pt;
}
</style>
