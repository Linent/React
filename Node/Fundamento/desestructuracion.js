const deadpool = {
    nombre: 'Wade',
    apellido: 'Wintosn',
    poder: 'Regeneración',
    edad:50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
}

//console.log( deadpool.getNombre())

//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }){
    
    nombre = 'Fernando';
    console.log(nombre, apellido, poder, edad);
}

//imprimeHeroe( deadpool );

const heroes = ['Deadpool', 'Superman', 'Batman'];
//const h1 = [0];
//const h2 = [1];
//const h3 = [2];
const [, , h3] = heroes;
console.log( h3 );

//const { nombre, apellido, poder, edad = 0} = deadpool;

//console.log(nombre, apellido, poder, edad)