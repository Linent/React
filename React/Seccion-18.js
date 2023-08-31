function getUsuarioActivo(nombre){
    return{
        uId: 'ABC567',
        userName: nombre
    }
};


const getUsuario = (nombre) => ({
    uId:'ABC567',
    userName: nombre
})

console.log(getUsuario("Anderson"));
//desestructuración de objetos
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave:'Ironman'
}

const useContex = ({clave, nombre, edad, rango})=>{
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.567,
            lng: -17867
        }
    }
}

const {nombreClave, anios, latlng:{ lat, lng}} = useContex( persona);
console.log(nombreClave, anios)
console.log(lat,lng);


// Desestructuración de arreglos

const personajes = ['Goku', 'Veggeta', 'Trunks'];

const useState = ( valor ) => {
    return [valor, () => { console.log ('Hola Mundo')}];
}

const [nombre,setNombre] = useState( 'Goku' );

console.log( nombre );
setNombre();