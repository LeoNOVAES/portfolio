<template>
    <div>
        <Header/>
        <Banner/>
        <Csv/>
        <Competencias/>
    </div>  
</template>

<script>
import Header from "@/components/Header"
import Banner from "@/components/Banner"
import Csv from "@/components/Cv"
import Competencias from "@/components/Competencias"

export default {
    components:{
       Header,
       Banner,
       Csv,
       Competencias
    },
    name:"Index"
}
</script>

<style>

</style>
