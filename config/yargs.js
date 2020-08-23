const opts=[{
    descripcion:{
        demand:true,
        alias:'d',
        desc:'Describe lo que devuelve la web'
    },
    completado:{
        demand:true,
        alias:'c',
        desc:'Verifica si esta hecho'
    }
},{
    descripcion:{
        demand:true,
        alias:'d',
        desc:'Describe lo que devuelve la web'
    }
},{
    completado:{
        alias:'c',
        desc:'Verifica si esta hecho'
    }
}];
const argv=require('yargs')
    .command('crear','crea un elemento',opts[1])
    .command('borrar','elimina elemento',opts[1])
    .command('mostrar','muestra los elementos',opts[2])
    .command('actualizar','actualiza',opts[0])
    .command('server','monta un servidor',opts[2])
    .help()
    .argv;
module.exports={
    argv
}