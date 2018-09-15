// JS ARRAYS METHODS

chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToEndOfArray(array, element) {
	  return [...array, element]
	}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToBeginningOfArray(array, element) {
	  return [element, ...array]
	}

function destructivelyRemoveElementFromBeginningOfArray(array) {
	  array.shift()
	  return array
}


function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}


accessElementInArray = function(array, index) {
	  return array[index]
}

// removeElementFromEndOfArray = 	function(array){
// 	  return array.shift()
// }

function destructivelyRemoveElementFromEndOfArray(array){
	  array.pop()
	  return array
}

	function removeElementFromEndOfArray(array) {
	  return array.slice(0, array.length - 1)

}



// KITENS  ————————————————

//  1 passing (682ms)
//   8 failing

//   1) Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:
//      ReferenceError: destructivelyAppendKitten is not defined
//       at Context.<anonymous> (test/index-test.js:14:7)

//   2) Arrays destructivelyPrependKitten(name) prepends a kitten to the beginningof the kittens array:
//      ReferenceError: destructivelyPrependKitten is not defined
//       at Context.<anonymous> (test/index-test.js:21:7)

//   3) Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
//      ReferenceError: destructivelyRemoveLastKitten is not defined
//       at Context.<anonymous> (test/index-test.js:29:7)

//   4) Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array:
//      ReferenceError: destructivelyRemoveFirstKitten is not defined
//       at Context.<anonymous> (test/index-test.js:37:7)

//   5) Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
//      ReferenceError: appendKitten is not defined
//       at Context.<anonymous> (test/index-test.js:45:7)

//   6) Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
//      ReferenceError: prependKitten is not defined
//       at Context.<anonymous> (test/index-test.js:53:7)

//   7) Arrays removeLastKitten() removes the last kitten in the kittens array andreturns a new array, leaving the kittens array unchanged:
//      ReferenceError: removeLastKitten is not defined
//       at Context.<anonymous> (test/index-test.js:61:7)

//   8) Arrays removeFirstKitten() removes the first kitten from the kittens arrayand returns a new array, leaving the kittens array unchanged:
//      ReferenceError: removeFirstKitten is not defined
//       at Context.<anonymous> (test/index-test.js:69:7)




// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}


//

 const playlist = {
 song: 'I wanna  love you '
 }

// 2 objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`:

 function updatePlaylist(playlist, artistName, songTitle)  {
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artist) {
 return  delete playlist[artist]
}




//////////// .  RECIPES



  // 1) Objects defines a `recipes` object:

  // 2) Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:

  // 3) Objects updateObjectWithKeyAndValue(object, key, value) it does not modifythe original object, but rather returns a clone with the new data:

  // 4) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:.js:31:7)

  // 5) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):

  // 6) Objects deleteFromObjectByKey(object, key) does not modify the original object  key) returns object without the delete key/value pair:

  // 8) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:

const recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object)
  return delete newObj[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
 return delete object[key]
}



const artistsAndSongs = {
  'Prince': ["Purple Rain", "When Doves Cry"],
  'The Beatles': ["Revolution", "Norwegian Wood"],
  'Joni Mitchell': ["A Case of You", "Sunny Sunday"],
  'Justin Bieber': ["Baby"]
}

artistsAndSongs['Daft Punk'] = ["Harder, Better, Faster, Stronger"]


delete artistsAndSongs["Justin Bieber"]

artistsAndSongs['Daft Punk'].push("Around the World")

console.log(artistsAndSongs)


// const oneTwoThree = [1, 2, 3]
// const sevenEightNine = [7, 8, 9]

// [4, 5, 6, ...oneTwoThree, ...sevenEightNine]



// const letters = ["alpha", "gamma", "delta"], which operation(s) return the array ["alpha", "beta", "gamma", "delta"]?

// letters.push("beta")
// letters.unshift('beta')
// [...letters.slice(0, 1), 'beta', ...letters.slice(1)]
// letters.splice(1, 1, 'beta')
