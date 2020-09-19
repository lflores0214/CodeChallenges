/* 
You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

For example, given an array of [1, 2, 3, 4] and a target value of 1, we have three values meeting the condition:
, , and

.

Function Description

Complete the pairs function below. It must return an integer representing the number of element pairs having the required difference.

pairs has the following parameter(s):

    k: an integer, the target difference
    arr: an array of integers

Input Format

The first line contains two space-separated integers
and , the size of and the target value.
The second line contains space-separated integers of the array

.

Constraints

each integer

    will be unique

Output Format

An integer representing the number of pairs of integers whose difference is
. 
*/

function pairs(k, arr) {
  const hash = new Set(arr);
  let count = 0;

  hash.forEach((key) => {
    let prop = key + k;
    hash.has(prop) ? count++ : null;
  });
  return count;
}

const myArr = [1, 5, 3, 4, 2];
const myArr1 = [
  363374326,
  364147530,
  61825163,
  1073065718,
  1281246024,
  1399469912,
  428047635,
  491595254,
  879792181,
  1069262793,
];
const myArr2 = [1, 3, 5, 8, 6, 4, 2];

console.log(pairs(myArr))
console.log(pairs(myArr1))
console.log(pairs(myArr2))
