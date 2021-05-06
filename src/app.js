const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const PORT = process.env.PORT || 5000

// const staticpath = path.join(__dirname,'../public');
const templatepath = path.join(__dirname,'../templates/views');
const partialspath = path.join(__dirname,'../templates/partials');
// console.log(path.join(__dirname,'../public'));

// app.use(express.static(staticpath));
app.use('/css',express.static(path.join(__dirname,'../public/css')));
app.use('/img',express.static(path.join(__dirname,'../public/img')));
app.use('/js',express.static(path.join(__dirname,'../public/js')));

app.set("view engine",'hbs');
app.set("views",templatepath);

hbs.registerPartials(partialspath)

app.get('/',(req,res)=>{
    // res.send("Hell From the server");
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/weather',(req,res)=>{
    res.render("weather")
})

app.get('*',(req,res)=>{
    res.render('error',{
        errorMsg : "Oops! Page Not Found"
    })
})

app.listen(PORT,()=>{
    console.log(`Server Running at http://localhost:${PORT}`);
})