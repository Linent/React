const empleados = [
    {
        id:1,
        nombre: 'Anderson'
    },
    {
        id:2,
        nombre: 'Julio'
    },
    {
        id:3,
        nombre: 'Cesar'
    }
]

const salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
    {
        id: 3,
        salario: 2000

    }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( e => e.id=== id )
    if (empleado){
        callback( null, empleado );
    } else {
        callback( `Empleado con id ${ id } no existe` );
    }
}
const getSalario = (id, callback) => {
    const salario = salarios.find( s => s.id === id )
    if(salario){
        callback( null, salario);
    } else {
        callback( `Salario con Id ${ id } no existe` );
    }
}

const id= 1;

getEmpleado( id, (err, empleado ) => {
    
    if( err ){
        console.log('ERROR!');
        return console.log (err);
    }
    console.log('Empleado existe!');
    console.log(empleado.nombre);
}) 

getSalario( id, (err, salario) => {
    
    console.log(salario.salario);
})