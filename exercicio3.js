/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */

function primeNumbers(number){
    let i=number-1;
    while (i != 1){
        if(number%i == 0){
            return `The number ${number} is not prime. You can divide it by ${i} multiples`
        }
        i--
    }
    return `The number ${number} is prime`
}

console.log(primeNumbers(189))
