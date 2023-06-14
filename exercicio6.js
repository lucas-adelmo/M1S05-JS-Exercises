/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */

let objArr = [
    {
        name: "produto1",
        price: 45.50
    },
    {
        name: "produto2",
        price: 10
    },
    {
        name: "produto3",
        price: 1000
    },
    {
        name: "produto4",
        price: 5.5
    }

]

let objArrUpdated = objArr.map( (obj) => {
    return `O ${obj.name} custa ${obj.price}`
})

let totalCost = objArr.reduce( (sum,obj) => {
    return sum += obj.price
}, 0)

let totalProducts = objArr.length;

console.log(objArrUpdated)
console.log("O custo somado dos produtos é" , totalCost)
console.log("A qtd total de produtos é" , totalProducts)


