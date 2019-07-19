<template>
<div>
  <b-navbar toggleable="lg" class="navbar-default bg-default"  style="padding-left:15%; margin-top:-20px">
    <b-navbar-brand href="#"><img src="../assets/logo.png"  width="70%" /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="bodyMenu">
      <b-navbar-nav  style="padding-left:25%">
        <b-nav-item href="#banner" style="font-weight:bold; padding-right:10%">Home</b-nav-item>
        <b-nav-item href="#sobre" style="font-weight:bold; padding-right:10%">Sobre</b-nav-item>
         <b-nav-item href="#habilidades" style="font-weight:bold; padding-right:10%">Habilidades</b-nav-item>
        <b-nav-item href="#contato" style="font-weight:bold; padding-right:10%">Contato</b-nav-item>
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
  }
 }
</script>

<style>
.bodyMenu{
  font-size: 16pt;
}
</style>
