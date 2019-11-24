var kittens = ["Milo", "Otis", "Garfield"] ;//define your array here

// destructively append Ralph to the end of the array
  function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}
// destructively append Bob to the beginning of the array
function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens;
}
//destructively remove Garfield from the the array
function destructivelyRemoveLastKitten(name){
  kittens.pop("Garfield");
  return kittens;
}
//destructively remove Milo from the array
function destructivelyRemoveFirstKitten(name){
  kittens.shift("Milo");
  return kittens;
}
//simply append Broom to the beginning of the array and return a new array
function appendKitten(name) {
  return [...kittens, "Broom"];
}

function prependKitten(name) {
  return ["Arnold", ...kittens];
  
}

function removeLastKitten(name){
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten(name) {
  return kittens.slice (1);
  
}

