const express = require('express');
const ejs = require('ejs');

const app = express();
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
    res.redirect("/name=joy&skincolor=abc&hat=abc&glasses=abc&eye=abc&misc=abc&hair=black");
});

app.get('/name=:name&skincolor=:skincolor&hat=:hat&glasses=:glasses&eye=:eye&misc=:misc&hair=:hair',(req,res)=>{
    req.params.hair = req.params.hair.toLowerCase();
    req.params.name = req.params.name.toLowerCase();
    req.params.skincolor = req.params.skincolor.toLowerCase();
    req.params.glasses = req.params.glasses.toLowerCase();
    req.params.eye = req.params.eye.toLowerCase();
    req.params.misc = req.params.misc.toLowerCase();
    console.log(req.params);
    res.render('index.ejs',{info:req.params});
});

const port = process.env.PORT || 8000;
app.listen(port,()=>{console.log(`Server Started at port ${port}`)});