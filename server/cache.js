const cache={};
const{archivo}=require('./config/mime');
const colors=require('colors');
const{encaminar}=require('./dist/encaminar');
const memory=(data,camino,req,res)=>{
    if(cache[camino]){
        res.writeHead(200,{'Content-Type':archivo(camino)});
        res.write(cache[camino]);
        res.end();
        console.log('================================================================'.green);
        console.log(`Recurso recuperado del cache :${camino}`.green);
        console.log('================================================================\n'.green);        
    }else{
        encaminar(data,camino,cache,req,res);
    }
}
module.exports={memory};