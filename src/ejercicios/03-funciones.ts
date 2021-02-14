//* a y b estan estrictamente como numericos, y retorna un resultado numerico si o si. 
function sumar(a: number, b: number): number{
    return a + b;
}

//* funcion de fecha que hace lo mismo que la otra.
const sumarFlecha = (a: number,b: number):number => {
    return a + b;
}

//* los opcionales no pueden ir antes que una variable normal, al final pueden ir los ya valorizados.
function multiplicar(numero: number,otroNumero?: number,base:number = 2):number {
    return numero * base;
}

// <!------------------------------------> 

//* estructura del personaje
interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

//* funcion que permite 'curar' al personaje
function curar(personaje: PersonajeLOR, curarX:number):void {
    personaje.pv += curarX;

    //console.log(personaje);
}

//* se crea un nuevo personaje a partir de la interface
const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida: ', this.pv);
    }
}

//* se llama la funcion curar y se hace el caculo al nuevo personaje
curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();