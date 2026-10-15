//arquivo != pasta

// arrays === lista

// let compras = ["ovo","arroz", "feijão branco","sabão em pó","sabão em barra"]
// //
// let busca = prompt("Digite o item a busca");

// let listaFiltrada = compras.find(compra =>
//     compra.toLowerCase().includes(busca.toLowerCase().
//     trim()) // )

// let encontrar = compras.indexOf(listaFiltrada)
// console.log(encontrar);


// let users =["Pedro", "Ana", "Joana","Dieego", "Davi Messias","Cristiano"];

// let seerchUser = prompt("Digite o nome do usuario que deseja buscar: ")

// //lembrando que, meu usuario adm não pode mandar em branco a busca. Chamamos isso de tratativa de erros.

// if(seerchUser === ""){
//     console.log("Não pode enviar em branco");
// }
// else{
//     //retorna o usuario qu for encontrado
//     let user = users.find(user =>
//         user.toLowerCase().includes(seerchUser.toLowerCase().trim())
// )
// //Devemos tratar tambem caso a busca nao retorne nenhum resultado
// if(user.length === 0){
//     //usuario nao encontrado
//     console.log("User not Found");
// }
// else{
//     console.log("Usuario encontrado: ".concat(user));
//     //buscar indice do usuario 
//     let index = users.indexOf(user);
//     //alterar o elemento 
//     users[index] = "novo valor";
//     console.log(users)
// }
// }

let fila =["Kayllane","Tomastrem","Naclara","ErickA","Lidiane","Beatriza","Yeontan"]
console.log("Fila da bilheteria: ", fila)

//fila cliente comum final da fila
fila.push("Taehyung")
console.log("Fila da bilheteria apos colocar o cliente comum:",fila)

//fila com cliente proprietario no inicio da fila
fila.unshift("Seaokjin")
console.log("Fila da bilheteria apos colocar cliente proprietario: ",fila)

//fila depois de tirar o priemeiro cliente da fila
fila.shift()
console.log("Fila da bilheteria apos o primeiro cliente pagar o engresso: ",fila)

//fila depois de remover o ultimo cliente
fila.pop()
console.log("Fila apos o ultimo cliente pagar o engresso: ",fila)