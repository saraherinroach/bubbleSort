function swap(index1, index2, array){
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function compare(num1, num2){
  if (num1 > num2) {
    return true;
  }
  return false;
}

function bubbleSort(array) {
  if (!array.length) {
    return [];
  } else {
    for (let i = 0; i < array.length; ++i) {
      if (compare(array[i],array[i+1])) {
        swap(i,(i+1), array);
      }
    }
    return bubbleSort(array.slice(0,-1)).concat(array[array.length-1]);
  }

  /* your code here */

}
