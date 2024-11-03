// methods -> functions attached to a datatype
// array method -> these methods only accessible for array object only.

const genres = ["horror", "comedy", "thriller"];

// 1. push -> it adds new element at the end of the list
console.log(genres.push("Anime"));
console.log(genres);

// 2. pop -> to remove element from the end of the list. returns the deleted value.
console.log(genres.pop());
console.log(genres);
// 3. unshift -> add to the start of the array
genres.unshift("Anime");
console.log(genres);
// 4. shift -> delete from the start of the array
genres.shift();
console.log(genres);

// 5. map: create a new array with applying the function on top of each element
const upperCaseGenres = genres.map((genre) => genre.toUpperCase());
console.log(upperCaseGenres);

// 6. filter: create a new array with elements which passes the test filter condition
const filterGenres = genres.filter((genre) => genre.length <= 6);
console.log(filterGenres);

// 7. reduce: It reduces the value from array to single value
            // prev curr
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((prev, curr) => prev + curr, 0);
console.log(sum);
