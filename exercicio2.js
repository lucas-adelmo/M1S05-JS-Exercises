/**
 * [M1S05] Ex 2 - Tradução de cores
 *
 * Escreve um programa que atribui um valor a uma variável `cor` em inglês e imprime
 * a tradução para a mesma cor em português. Utiliza uma estrutura condicional (switch)
 * para fazer o mapeamento das cores.
 */

function translateColors(color){
    switch (color){
        case "blue":
            return `The color ${color} is translated to "Azul" in Portuguese`
        case "yellow":
            return `The color ${color} is translated to "Amarelo" in Portuguese`
        case "red":
            return `The color ${color} is translated to "Vermelho" in Portuguese`
        case "green":
            return `The color ${color} is translated to "Verde" in Portuguese`
        case "white":
            return `The color ${color} is translated to "Branco" in Portuguese`
        case "black":
            return `The color ${color} is translated to "Preto" in Portuguese`
        case "pink":
            return `The color ${color} is translated to "Rosa" in Portuguese`
        case "purple":
            return `The color ${color} is translated to "Roxo" in Portuguese`
        case "brown":
            return `The color ${color} is translated to "Marrom" in Portuguese`
        case "gray":
            return `The color ${color} is translated to "Cinza" in Portuguese`
        default:
            return `Sorry, we don't have this color in our database. Please contact the developer.`
    }
}


// Type the color as a string:
console.log(translateColors("blue"))