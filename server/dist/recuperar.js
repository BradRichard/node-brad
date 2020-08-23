const{template}=require('../template');
const querystring = require('querystring');
const{crearDBF,getListado}=require('../../dist/mostrar')
let listado='';
const recuperar=(req,res)=>{
    let info='';
    req.on('data',datosParciales=>info+=datosParciales);
    req.on('end',()=>{
        const formulario=querystring.parse(info);
        crearDBF(formulario['descripcion'],formulario['completado']);
        getListado().forEach(lista=>listado+=`<br>Descripcion:${lista.descripcion}<br>Completado:${lista.completado}<br>`);
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(template('Formulario',`<p>
            ${listado}</p><br>
            <a href="index.html">Retornar</a>
        `));
    });
}

module.exports={recuperar};