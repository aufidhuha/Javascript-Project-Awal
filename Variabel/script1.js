// membuat variabel dengan menggunakan let
let angka1 = 10

console.log( "Angka 1 : " + angka1)

let angka2 = 100
angka2 = 1000
console.log("Angka 2 : " + angka2)


let word1 = "Halo Mas Bro"
word1 = "Halo mas bro dan mas bray"
console.log(word1)
console.log('-------------------------')


// membuat variabel menggunakan var
var varAngka1 = 1000;
var varWord1 = "Halo Mas Bro";
console.log(varAngka1)
console.log(varWord1)
console.log('-------------------------')


// perbedaan let dan var

let letNumber = 1000;
{
    let letNumber = 2000;
    console.log(letNumber)
}
console.log(letNumber)
console.log('-------------------------')


var varNumber = 1000;
{
    var varNumber = 5000;
    console.log(varNumber)
}
console.log(varNumber)
console.log('-------------------------')


// konstanta
const pi = 3.14
console.log(pi)

const cNumber = 100
// cNumber = 200 : Error karena konstanta tidak bisa dirubah
console.log(cNumber)