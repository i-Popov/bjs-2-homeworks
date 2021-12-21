function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return arr1.every((a, index) => a === arr2[index]);
  } else {
   return false
  }
};

function advancedFilter(arr) {
  let resultArr  = arr.filter(elem => elem > 0).filter(elem => elem % 3 == 0).map(elem => elem * 10);
  return resultArr; // array
}