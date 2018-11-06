function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  let firstHalf;
  let secondHalf;

  if (wholeArray.length <= 1) {
    secondHalf = [];
    if (!wholeArray[0]) {
      firstHalf = [];
    } else {
      firstHalf = wholeArray;
    }
  } else {
    const midPoint = Math.floor(wholeArray.length / 2);
    firstHalf = wholeArray.slice(0, midPoint);
    secondHalf = wholeArray.slice(midPoint);
  }
  return [firstHalf, secondHalf];
}

function merge(arr1,arr2) {
  let leftPointer = 0;
  let rightPointer = 0;
  let newArr = [];
  while (leftPointer < arr1.length && rightPointer < arr2.length) {
    if (arr1[leftPointer] < arr2[rightPointer]) {
      newArr.push(arr1[leftPointer]);
      leftPointer++;
    } else {
      newArr.push(arr2[rightPointer]);
      rightPointer++;
    }
  }

  if (leftPointer >= arr1.length) {
    newArr = newArr.concat(arr2.slice(rightPointer));
  } else {
    newArr = newArr.concat(arr1.slice(leftPointer));
  }
  return newArr;
}

function mergeSort(array) {
  if (!array.length) {
    return array;
  }
  let splitArr = split(array);
  if (splitArr[0].length===1) {
    return merge(splitArr[0],splitArr[1]);
  } else {
    return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
  }
}
