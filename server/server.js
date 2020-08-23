const http=require('http');
const url=require('url');
const colors=require('colors');
const querystring = require('querystring');
const {memory}=require('./cache');
const server=(data)=>http.createServer((req,res)=>{
    const objectURL=url.parse(req.url);
    console.log(`#####################################################################`.blue);
    console.log(`Camino completo de los recursos y parametros : ${objectURL.path}`.green);
    console.log(`Camino y nombre del recurso : ${objectURL.pathname}`.red);
    console.log(`Parametros del recurso : ${objectURL.query}`.green);
    console.log(`#####################################################################\n`.blue);
    let camino=`static${objectURL.pathname}`;
    if(camino=='static/'){camino='static/index.html';};
    memory(data,camino,req,res);
}).listen(8888)
module.exports={
    server
};