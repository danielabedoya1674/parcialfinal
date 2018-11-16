const express = require('express'),
    hbs = require('express-handlebars');
    app = express(),
    fs = require('fs');

    app.engine('handlebars', hbs());
    app.set('view engine', 'handlebars');
    
    app.use('/static', express.static('public'));

app.use(express.static("public"));

var pagUno = 0;
var pagDos = 0;
var pagTres = 0;

app.get("/", (req, res) => {
    pagUno += 1;
    fs.writeFileSync("logs.txt", "PaginaA: " + pagUno+"\n"+"PaginaB: " + pagDos+"\n"+"PaginaC: " + pagTres);
    res.render("index", {
        titulo: "Pagina A"
    });
});

app.get("/pagdos", (req, res) => {
    pagDos += 1;
    fs.writeFileSync("logs.txt",  "PaginaA: " + pagUno+"\n"+"PaginaB: " + pagDos+"\n"+"PaginaC: " + pagTres);
    res.render("paginados", {
        titulo: "Pagina B"
    });
});

app.get("/pagtres", (req, res) => {
    pagTres += 1;
    fs.writeFileSync("logs.txt",  "PaginaA: " + pagUno+"\n"+"PaginaB: " + pagDos+"\n"+"PaginaC: " + pagTres);
    res.render("paginatres", {
        titulo: "Pagina C"
    });
});

app.listen(1234, () => {
    console.log("deberia funcionar 1234");
});