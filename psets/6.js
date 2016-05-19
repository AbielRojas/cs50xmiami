/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {
  var string1 = a,
      string2 = b,
      firstlet1 = string1.slice(0,1),
      firstlet2 = string2.slice(0,1),
      rest1 = string1.slice(1,(string1.length)),
      rest2 = string2.slice(1,(string2.length)),
      newWord1 = firstlet2 + rest1,
      newWord2 = firstlet1 + rest2
  ;
  console.log(newWord1 + " " + newWord2);
  return (newWord1 + " " + newWord2);
}
