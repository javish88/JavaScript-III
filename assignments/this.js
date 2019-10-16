/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window -  if 'this' keyword is not apply to any other rules or objects , functions etc it is assign to the window . Like if we were to console 'this' it will show the whole window
* 2. Implicit -  if 'this' keyword is only able to be apply to objects with methods. 
* 3. Explicit - will let us do .call .apply .bind all of these are different and state what the 'this' keyword is in any given function
* 4. New - Using 'this' keyword constructs a new object and this points to it.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// console.log(this === window);
// console.log(this.document === document);


// Principle 2

// code example for Implicit Binding
// let pokemonOne = {
//     name: 'Pikachu',
//     species: 'thunder pokemon',
//     favFood: 'chocolate',
//     eat: function(){
//         console.log(`${this.name} is a ${this.species} and it loves to eat ${this.favFood}`);
//     }
// }

// pokemonOne.eat();

// let pokemonOne = {
//     name: 'Raichu',
//     species: 'electric pokemon',
//     favFood: 'strawberries',
//     eat: function(){
//         console.log(`${this.name} loves to eat ${this.favFood} and it is a ${this.species} 'watch out it might shock you'`);
//     }
// }

// pokemonOne.eat();


// Principle 3

// code example for New Binding
// function Pokemon(shock){
//     this.phrase = shock;
// }

// let myPokemon = new Pokemon('Meow will cut you ')

// console.log(myPokemon.phrase);



// Principle 4

// code example for Explicit Binding

// call - will immediately invoke the function / .call pass arguments in one by one
// function species(){
//     console.log(this.name);
// }

// let  pokemonOne = {
//     name: 'Growlithe',
//     sound: 'GROWL'
// }

// let pokemonTwo = {
//     name: 'Zappdos',
//     sound: 'Qwek'
// }

// species.call(pokemonOne);
// species.call(pokemonTwo);

//bind  - you pass arguments in one by one but it does not immediately invoke the function. It returns a brand new function that can be invoked later. 
// function pokemon(){
//     console.log(this.sound);
// }

// let pokemonOne = {
//     name: 'Butterfree',
//     sound: 'pewwwwww'
// }

// friendlyPokemon = pokemon.bind(pokemonOne);

// friendlyPokemon();



