// Write your solution here!
// Initializing the cats array
const cats = ["Milo", "Otis", "Garfield"];



// adding a cat to the end of the array
function destructivelyAppendCat(append){
    append.push ("Jason");
}
destructivelyAppendCat (cats);
//  console.log (`Cat Appended : ${cats}`);



// adding a cat at the begining of the array
function  destructivelyPrependCat(prepend){
    prepend.unshift ("Jenny");
}
destructivelyPrependCat (cats);
//  console.log (`Cat Prepended : ${cats}`);



//  remove a cat at the end of the array
function destructivelyRemoveLastCat(removeend){
    removeend.pop ();
}
destructivelyRemoveLastCat(cats);
// console.log (`Cat Removed at the end : ${cats};`);



// remove a cat at the beginning of the array
function destructivelyRemoveFirstCat(removefirst){
    removefirst.shift();
}
destructivelyRemoveFirstCat (cats);
// console.log (`Removed First Cat: ${cats}`);



// append cats array without changing the initial array
const appendCat = [...cats, "Tom"];
// console.log (appendCat);



// prepend cats array without changing the initial array
const prependCat = ["Jerry",...cats];
// console.log (prependCat);


// slice the last cat without changing the initial array
const removeLastCat = cats;
console.log (cats.slice(0, -1));

// slice the first cat without changing the initial array
const removeFirstCat = cats;
console.log (cats.slice(1));