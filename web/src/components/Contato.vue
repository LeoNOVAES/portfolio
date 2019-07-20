<template>
<div style=" padding-top:9%; padding-bottom:7%">
    <div class="row" style="" >
        <div class="titleContato col-sm-12">
            <h1>ENTRE EM CONTATO</h1>
            <img src="../assets/zap.png" width="35px"/><p>(61) 996245495</p>
            <p>Sinta-se a vontade para qualquer pergunta ou fazer um orçamento sem compromisso!</p>
        </div>
        <div class="col-sm-12">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="nome">Nome</label>
                    <input type="text" v-model="nome" class="form-control" id="nome" placeholder="NOME">
                </div>
                <div class="form-group">
                    <label for="mensagem">Mensagem</label>
                    <textarea v-model="mensagem" class="form-control" id="mensagem" rows="3"></textarea>
                </div>
              
                <button type="submit" class="btn btn-dark" @click="sendEmail">ENVIAR</button>
            </form>
        </div>
    </div>
</div>   
</template>

<script>
export default {
    data(){
        return{
            email:"",
            nome:"",
            mensagem:""
        }
    },
    methods:{
        async sendEmail(){
            let res;

            const user = {
                email:this.$data.email,
                nome:this.$data.nome,
                mensagem:this.$data.mensagem
            }

            const req = await fetch('http://localhost:8084/cliente/email',{
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                 },
                body:JSON.stringify(user)
            });
        }
    }
}
</script>

<style>
.contatoF{
    display: flex;
    flex-direction: column  ;
    justify-content: center;
    align-items: center;
    padding-left:30px;
    font-size: 12pt;
    
}
.titleContato{
    display: flex;
    flex-direction: column  ;
    justify-content: center;
    align-items: center
}
</style>
