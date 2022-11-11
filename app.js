const express = require('express');
const ejs = require('ejs');

const app = express();
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
    res.json({message:'temp'})
});

app.get('/name=:name&skincolor=:skincolor&hat=:hat&glasses=:glasses&eye=:eye&misc=:misc&hair=:hair',(req,res)=>{
    req.params.hair = req.params.hair.toLowerCase();
    req.params.name = req.params.name.toLowerCase();
    req.params.skincolour = req.params.hair.toLowerCase();
    req.params.glasses = req.params.name.toLowerCase();
    req.params.eye = req.params.hair.toLowerCase();
    req.params.misc = req.params.name.toLowerCase();
    console.log(req.params);
    res.render('index.ejs',{info:req.params});
});

const port = process.env.PORT || 8000;
app.listen(port,()=>{console.log(`Server Started at port ${port}`)});