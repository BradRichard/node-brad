const colors=require('colors');
const fs=require('fs');
let listas=[];
const guardarDB=()=>{
    let data=JSON.stringify(listas);
    fs.writeFile('dataBase/data.json',data,e=>{
        if(e){throw(`No se logro guardar en la base de Datos`);}
    });
};
const crearDBF=(descripcion,completado)=>{
    cargarDB();
    if(completado.match(/^t/i)){completado=true;}else if(completado.match(/^f/i)){completado=false;}
    let listado={
        descripcion,
        completado
    };
    listas.push(listado);
    guardarDB();
}
const cargarDB=()=>{
    try{
        listas=require('../database/data.json');
    }catch(e){listas=[];}
}
const getListado=()=>{
    cargarDB();
    return listas;
}
const actualizar=(descripcion,completado=true)=>{
    cargarDB();
    let index=listas.findIndex(lista=>lista.descripcion===descripcion);
    if(index>=0){
        if(completado.match(/^t/i)){completado=true;}
            else if(completado.match(/^f/i)){completado=false;}
        listas[index].completado=completado;
        guardarDB();
        return true;
    }else{return false;}
}
const borrar=(descripcion)=>{
    cargarDB();
    let nuevaLista=listas.filter(lista=>lista.descripcion!==descripcion);
    if(listas.length===nuevaLista.length){
        return false;
    }else{
        listas=nuevaLista;
        guardarDB();
        return true;
    }
};
const crear=(descripcion)=>{
    cargarDB();
    let listado={
        descripcion,
        completado:false
    };
    listas.push(listado);
    guardarDB();
    return listado;
};
module.exports={
    getListado,
    borrar,
    actualizar,
    crear,
    crearDBF
};