const express = require("express");
const app = express();
const config = require("./config.json");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
sgMail.setApiKey(config.sendgridkey);


app.use(express.static('dist'));

//Serves all the request which includes /images in the url from Images folder
app.use('/', express.static(__dirname + '/dist'));


app.listen(8084, ()=>{
    console.log("rodando na 8084")  
});

app.post('/cliente/email', (req, res) => {
    console.log(req.body)
    sgMail.send({
        to:req.body.email,
        from: "leandrofern.novaes@gmail.com",
        subject:req.body.nome,
        html:req.body.mensagem
    });

    return res.status(202).json("EMail enviado com sucesso!");
});
