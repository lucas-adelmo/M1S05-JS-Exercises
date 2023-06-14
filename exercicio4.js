/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */


function fibonacci(number){
    
    let i=2;
    let fibonacciArray = [0,1]

    while (fibonacciArray[i-1]<number){
        
        fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2]
        i++
    }
    
    fibonacciArray.pop()
    return fibonacciArray
}

console.log(fibonacci(90))

// Dá pra fazer conforme abaixo tbem, simplesmente aplicando a fórmula de fibonacci na unha. Mas é mais 
// performático fazer do jeito que fiz acima. Pois vou estar reutilizando a array pra fazer as operações.

function fibonacci_other(number){
    
    let fn = 0;
    let fn_minus1 = 1;
    let fn_minus2 = 0;

    let fibonacciArray = [0,1]
    while (fn<number){
        
        fn = fn_minus1 + fn_minus2;
        fn_minus2 = fn_minus1
        fn_minus1 = fn;

        fibonacciArray.push(fn)
    }

    fibonacciArray.pop()

    return fibonacciArray
}



