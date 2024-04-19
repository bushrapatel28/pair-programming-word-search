// Bushra Patel and Grant Brow

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  // Joining the array elements by row
  const horizontalJoin = letters.map(ls => ls.join(''));

  // if (l.includes(word)) {return true}
  // Transposes the array to swap the rows and collumns to check if the word is present vertically in original array
  let verticalJoin = letters[0].map((collumn, c) => letters.map((row, r) => letters[r][c]));
  // Joining the transposed array elements by row
  verticalJoin = verticalJoin.map(ls => ls.join(''));

  for (let newWord of horizontalJoin) {
    newWord = newWord.toString();
    //console.log(newWord);
    if (newWord.includes(word)) {
      return true;
    }
  }
  for (let newWord2 of verticalJoin) {
    newWord2 = newWord2.toString();
    if (newWord2.includes(word)) {
      return true;
    }
  }
  for (let newWord3 of horizontalJoin) {
    newWord3 = newWord3.split('');
    newWord3 = newWord3.reverse().join('');
    if (newWord3.includes(word)) {
      return true;
    }
  }
  for (let newWord4 of verticalJoin) {
    newWord4 = newWord4.split('');
    newWord4 = newWord4.reverse().join('');
    if (newWord4.includes(word)) {
      return true;
    }
  }

  //ATTEMPTED ON DIAGONAL SEARCH - Failed Attempt
  // const testArray = letters;
  // console.log(testArray);
  // let newWord5 = "";
  // let i = 0;
  // let k = 0;
  // While newword5 does not uinclude != true, increment the starting value
  // while (newWord5 !== word) {
  //     newWord5 += testArray[i][k];
  //         console.log(newWord5);
  //         //k++;
  //         if (newWord5.includes(word)) {
  //             return true;
  //         } else {
  //             i += 1;
  //             k += 1;
  //         }
  // }
  // for(let i = 0; i < horizontalJoin[0].length; i++) {

  //     //for(let j = 0; j < verticalJoin[0].length; j++) {
  //         newWord5 += testArray[i][k];
  //         console.log(newWord5);
  //         k++;
  //         if (newWord5.includes(word)) {
  //             return true;
  //         }
  //     //}
  // }

  return false;
};

// Bushra and I worked with a mentor to create this, they (Hope Warren) were incredibly insightful and a great help to us
// we have not included this code in our main function as we feel we cannot
// adequately explain every single part of it though we understand the greater whole.
// It was a great learning experience and taught us a lot.
function findDiagonalWord(matrix, target) {
  //Assuming an 8x8 matrix, n should be 8
  const n = matrix.length;
  const reverseWord = target.split('').reverse().join('');

  // Helper function to check diagonals from top-left to bottom-right
  function checkDiagonal(x, y) {
    let chars = [];
    for (let i = 0; x + i < n && y + i < n; i++) {
      chars.push(matrix[x + i][y + i]);
      const formedWord = chars.join("");
      if (formedWord.includes(target) || formedWord.includes(reverseWord)) {
        return true;
      }
    }
    return false;
  }

  // Helper function to check diagonals from bottom-left to top-right
  function checkAntiDiagonal(x, y) {
    let chars = [];
    for (let i = 0; x - i >= 0 && y + i < n; i++) {
      chars.push(matrix[x - i][y + i]);
      const formedWord = chars.join("");
      if (formedWord.includes(target) || formedWord.includes(reverseWord)) return true;
    }
    return false;
  }

  // Check all possible diagonals that can fit the word
  for (let i = 0; i < n; i++) {
    if (checkDiagonal(i, 0)) return true;
    if (i > 0 && checkDiagonal(0, 1)) return true;
    if (checkAntiDiagonal(n - 1 - i, 0)) return true;
    if (i > 0 && checkAntiDiagonal(n - 1, i)) return true;
  }

  return false;
}

// Example usage:
//   const matrix = [
//     ['f', 'x', 'c', 'f', 'a', 't', 'y', 'p'],
//     ['n', 'f', 'k', 'c', 'r', 'a', 't', 'y'],
//     ['f', 'n', 'f', 'n', 'c', 'n', 'a', 't'],
//     ['t', 'r', 'n', 'f', 'a', 'c', 'r', 'a'],
//     ['a', 't', 'n', 'n', 'r', 'r', 'c', 'r'],
//     ['r', 'a', 't', 'n', 'n', 'a', 'f', 'c'],
//     ['a', 'r', 'a', 't', 'k', 'n', 'n', 'x'],
//     ['k', 'a', 'r', 'a', 't', 'y', 'n', 'k']
//   ];
//   console.log(findDiagonalWord(matrix, 'frank')); // Output depends on the matrix content


module.exports = wordSearch;