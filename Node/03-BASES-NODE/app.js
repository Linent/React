
const multiplicacion = (base=5, cantidad =10) => {
    for(let i=0; i<=cantidad;i++){
        console.log(`${base} x  ${i} = ${base * i}`);
    }
}
console.clear();

multiplicacion(5);