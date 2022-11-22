import diccionario from '../components/Json/diccionario.json'

export function getPalabraRandom() {
    const indexRandom = Math.floor(Math.random() * diccionario.length);
    return diccionario[indexRandom];
}