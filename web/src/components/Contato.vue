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
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="nome">Nome</label>
                    <input type="text" class="form-control" id="nome" placeholder="NOME">
                </div>
                <div class="form-group">
                    <label for="mensagem">Mensagem</label>
                    <textarea class="form-control" id="mensagem" rows="3"></textarea>
                </div>
              
                <button type="submit" class="btn btn-dark">ENVIAR</button>
            </form>
        </div>
    </div>
</div>   
</template>

<script>
export default {

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
