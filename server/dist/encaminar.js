const colors=require('colors');
const fs=require('fs');
const{archivo}=require('../config/mime');
const{template}=require('../template');
const{recuperar}=require('./recuperar');
const encaminar=(data,camino,cache,req,res)=>{
    console.log(`================================`.green);
    console.log(`${camino}`.green);
    console.log(`================================\n`.green);
    switch(camino){
        case 'static/recuperardatos':
            recuperar(req,res);
        break;
        default:
            fs.stat(camino,e=>{
                if(!e){
                    fs.readFile(camino,(e,contenido)=>{
                        if(e){
                            res.writeHead(500,{'Content-Type':'text/plain'});
                            res.write('Error Interno');
                            res.end();
                        }else{
                            cache[camino]=contenido;
                            res.writeHead(200,{'Content-Type':archivo(camino)});
                            res.write(contenido);
                            res.end();
                            console.log('======================================================'.green);
                            console.log(`Recurso leido de :${camino}`.green);
                            console.log('======================================================\n'.green);
                        }
                    });
                }else{
                    res.writeHead(404,{'Content-Type':'text/html'});
                    res.write(template('Recurso Inexistente',`${JSON.stringify(data)}<br>${data[0].descripcion}`));
                    res.end();
                }
            });
    }
}
module.exports={encaminar};