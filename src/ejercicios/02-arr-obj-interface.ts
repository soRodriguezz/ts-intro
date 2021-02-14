/*
    ===== Código de TypeScript =====
*/

let habilidades: string [] = ['Bash', 'Counter', 'Healing'];

//* Interface es la estructura que queremos los datos
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    //* El signo '?' acepta la variable sin ser declarara, solo es necesario maquetearla 
    puebloNatal?: string;
}

//* personaje va a ser de tipo Personaje, donde se declaran los tipos de variables.
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo paleta';

//* Crear una tabla en consola con el objeto.
console.table(personaje);