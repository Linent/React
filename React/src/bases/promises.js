import { getHeroeById, getHeroesByOwner } from './exports';
/* const promesa = new Promise ( (resolve, reject) => {
    setTimeout( () =>{

        const heroe = getHeroeById(2);
        resolve( heroe);

        getHeroesByOwner('DC');
    }, 2000)
});


promesa.then( (heroe)=> {
    console.log('then de la promesa');
} ) */

const getHeroeByIdAsync = ( id ) => {
    return new Promise ( (resolve, reject) => {
        setTimeout( () =>{
    
            const heroe = getHeroeById(id);
            if(!heroe) reject('Heroe no encontrado');
            resolve( heroe );
    
          
        }, 2000)
    });

}
getHeroeByIdAsync(10)
    .then( console.log )
    .catch( console.warn )