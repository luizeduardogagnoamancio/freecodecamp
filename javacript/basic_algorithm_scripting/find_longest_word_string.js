function findLongestWordLength(str) {
    let array = str.split(" ")
    array.sort(function(a, b){return b.length - a.length})
    return array[0].length;
  }
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));