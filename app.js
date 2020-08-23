const{argv}=require('./config/yargs');
const colors=require('colors');
const{crear,getListado,borrar,actualizar}=require('./dist/mostrar');
const{server}=require('./server/server');
let comando=argv._[0];
switch(comando){
    case 'crear':
        let tarea=crear(argv.descripcion);
        console.log(tarea);
    break;
    case 'mostrar':
        let tareas=getListado();
        if(argv.completado!==undefined){
            if(argv.completado.match(/^t/i)){
                tareas=tareas.filter(tarea=>tarea.completado===true);
            }else if(argv.completado.match(/^f/i)){
                tareas=tareas.filter(tarea=>tarea.completado===false);
            }
        }
        console.log(`\t\tCANTIDAD ${tareas.length}`.red);
        console.log('=============================================='.red);
        console.log('======Mostrar todas las tareas por hacer======'.red);
        console.log('=============================================='.red);
        console.log(tareas);
        tareas.forEach(tarea=>{
            console.log('#################################################'.red);
            console.log(`DESCRIPCION:  ${tarea.descripcion}\nESTADO:  ${tarea.completado}`.green);
            console.log('#################################################'.red)
        });
    break;
    case 'actualizar':
        console.log('================================================='.red);
        console.log('==========Actualiza una tarea por hacer=========='.red);
        console.log('================================================='.red);
        let actualizado=actualizar(argv.descripcion,argv.completado);
        console.log(actualizado)
    break;
    case 'borrar':
        console.log('================================================='.red);
        console.log('============Elimina una tarea por hacer=========='.red);
        console.log('================================================='.red);        
        let borrado=borrar(argv.descripcion);
        console.log(borrado);
    break;
    case 'server':
        let datos=getListado();
        if(argv.completado!==undefined){
            if(argv.completado.match(/^t/i)){
                datos=datos.filter(dato=>dato.completado===true);
            }else if(argv.completado.match(/^f/i)){
                datos=datos.filter(dato=>dato.completado===false);
            }
        }
        server(datos);
        console.log(`###Servidor Web Iniciado###`.red);
    break;
    default:
        console.log('comando no reconocido');
}