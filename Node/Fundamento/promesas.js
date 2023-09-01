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
    }
];

const getEmpleado = (id, callback) => {
    // if (empleado){
        //     callback( null, empleado );
        // } else {
            //     callback( `Empleado con id ${ id } no existe` );
            // }
    const promesa = new Promise( (resolve, reject) => {
        const empleado = empleados.find( e => e.id=== id )?.nombre
        if( empleado ){
            resolve( empleado );
        }else{
            reject ( `No existe empleado con id ${ id }` )
        }
    });
    return promesa
}
const id = 1
getEmpleado(id)
    .then ( empleado => console.log(empleado) );