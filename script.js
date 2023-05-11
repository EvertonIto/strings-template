// let pessoa = prompt("Qual é o seu nome?" . toUpperCase())
// let cor = prompt("Qual é a sua cor preferida?")
// let citacao = prompt("Qual sua citação favorita?")

// let fraseConcatenacao = “A cor favorita de “ + pessoa + “ é “ + cor + ". \"" + citacao + "\""

// let fraseTemplateString = `A cor favorita de ${pessoa} é ${cor}. "${citacao}"`

// console.log("Concatenação: ", fraseConcatenacao)
// console.log("Template string: ", fraseTemplateString)

// let fraseQuebraLinha = "Nome: " + pessoa + "\nCor favorita: " + cor

// let fraseQuebraLinhaTemplateString = `Nome: ${pessoa}
// Cor favorita: ${cor}`

// console.log(fraseQuebraLinhaTemplateString)

// console.log("everton".toUpperCase()) //toLowerCase()

// console.log("Everton Ito".length)

// console.log(pessoa.length)

// console.log("Everton".includes("R"))

let nomeDoUsuario = prompt("Qual é o seu nome?")
let emailDoUsuario = prompt("Qual é o seu email?")

let frase = `O email ${emailDoUsuario} foi cadastrado com sucesso. 
Seja bem vindo ${nomeDoUsuario}! `

console.log(frase + "A quantidade de caracteres presentes no nome é: " + nomeDoUsuario.length)
console.log(frase.replaceAll("r","x"))
console.log("O email do usuario possui @? " + emailDoUsuario.includes("@"))

