const express = require("express");
const app = express();
const config = require("./config.json");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const fs = require("fs");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
sgMail.setApiKey(config.sendgridkey);

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader("Access-Control-Allow-Credentials",true);  
    next();
});

app.use(express.static('dist'));

//Serves all the request which includes /images in the url from Images folder
app.use('/', express.static(__dirname + '/dist'));


app.listen(8084, ()=>{
    console.log("rodando na 8084")  
});

app.post('/cliente/email', (req, res) => {
    console.log(req.body);
    sgMail.send({
        to:req.body.email,
        from: "leandrofern.novaes@gmail.com",
        subject:req.body.nome,
        html:req.body.mensagem
    })
    .catch((e)=>{
        console.log(e)
    })

    return res.status(202).json("Email enviado com sucesso!");
});

app.get("/api/curriculo",(req,res)=>{
    fs.readFile('./static/pdf/c.pdf',(err,pdf)=>{
        if(err){
            console.log(err);
            return;
        }

        res.writeHead(200,{'content-type':'application/pdf'});
        res.end(pdf);
    });
});

app.get("/api/download",(req,res)=>{

    let pdf = './static/pdf/c.pdf';
    return res.download(pdf);
});
