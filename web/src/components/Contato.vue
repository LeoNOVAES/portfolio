<template>
<div style=" padding-top:9%; padding-bottom:7%">
    <div class="row" style="" >
        <div class="titleContato col-sm-12">
            <h1>ENTRE EM CONTATO</h1>
            <img src="../assets/zap.png" width="35px"/><p>(61) 996245495</p>
            <p>Sinta-se a vontade para qualquer pergunta ou fazer um orçamento sem compromisso!</p>
        </div>
        <div class="col-sm-12">
            <div v-if="validate.length > 0" class="bg-danger" style="color: rgb(255, 255, 255); padding: 20px; margin: 11px; border-radius: 10px; font-weight: bold;" >
                {{ validate }}
            </div>
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
              
                <a  class="btn btn-dark" @click="sendEmail" style="color:#ffffff">ENVIAR</a>
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
            mensagem:"",
            validate:""
        }
    },
    methods:{
        async sendEmail(){
            let res;

            if(this.$data.email.length == 0 || this.$data.nome.length == 0 || this.$data.mensagem.length == 0){
                this.$data.validate = "Todos os campos devem estar preenchidos!";
                return;
            }

            const user = {
                email:this.$data.email,
                nome:this.$data.nome,
                mensagem:this.$data.mensagem
                
            }

            const req = await fetch('http://149.56.185.80:8084/cliente/email',{
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                 },
                body:JSON.stringify(user)
            })
            .then(async (response)=>{
                let res = await response.json();
                this.$swal({
                    title:res,
                    type: 'success',
                    confirmButtonColor: '#41b882'
                });

                this.$data.nome = "";
                this.$data.mensagem = "";
                this.$data.email = "";

                return;
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
