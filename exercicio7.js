/**
 * [M1S05] Ex 7 - Manipulação de arrays
 *
 * Escreve um programa que contém três funções para manipular arrays, utilizando os métodos
 * push, pop e slice:
 *   A. `adicionarElemento`: recebe um array e um elemento, e adiciona o elemento ao final do array.
 *      Em seguida, retorna o array atualizado.
 *   B. `removerUltimoElemento`: recebe um array, remove o último elemento do array e retorna o elemento removido.
 *   C. `removerElementosIntervalo`: recebe um array, um índice inicial e um índice final. A função deve
 *      remover os elementos do array compreendidos entre os índices inicial e final. Em seguida, retorna o
 *      array atualizado.
 */


let words = ["sapato", "devInHouse", "CS:Go", "Lucas", "Clamed", "pé", "tio", "bayblade"];

function addElement(arr, element){
   arr.push(element)
    return arr
}

function removeLastElement(arr){
    return arr.pop()
}

function sliceArr(arr,initial,final){
    const newArr = arr.slice(initial+1,final)
    return newArr
}

// console.log(sliceArr(words,2,5))
// console.log(removeLastElement(words))
// console.log(addElement(words,"Heeeeey"))

