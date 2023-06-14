/**
 * [M1S05] Ex 1 - Classificação de idade
 *
 * Escreve um programa que atribui um valor a uma variável `idade` e determina
 * em qual categoria ela se enquadra: criança (0-12 anos), adolescente (13-17 anos),
 * adulto (18-59 anos) ou idoso (60 anos ou mais). Utiliza uma estrutura condicional
 * (if, else if, else).
 */


function classifyAge(age) {
    const ageCategories = ["child", "adolescent", "adult", "elderly"];

    if (isNaN(age) || age < 0) {
        return "Invalid age";
    } else if (age <= 12) {
        return `The age provided is ${age}. The person is classified as a ${ageCategories[0]}.`;
    } else if (age >= 13 && age <= 17) {
        return `The age provided is ${age}. The person is classified as an ${ageCategories[1]}.`;
    } else if (age >= 18 && age <= 59) {
        return `The age provided is ${age}. The person is classified as an ${ageCategories[2]}.`;
    } else {
        return `The age provided is ${age}. The person is classified as an ${ageCategories[3]}.`;
    }
}

console.log(classifyAge(18));
