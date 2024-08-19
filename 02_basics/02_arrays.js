const marvelHeros = ["Iron", "Spiderman", "Thor", "Hulk"];
const DcHeros = ["Batman", "Wonderwomen", "Flash"];

marvelHeros.push(DcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

const another_array = [1,2,3, [4,5,6], 7,8,[9,10,11], 12,13, [14,15, [16,17,18]]];

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Irfan"));
console.log(Array.from("Irfan"));
