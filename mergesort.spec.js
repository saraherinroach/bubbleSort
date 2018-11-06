describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
    expect(split([2,3])).toEqual([[2],[3]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([2, 3], [1, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([1,3,5], [2,6,8])).toEqual([1,2,3,5,6,8]);
    expect(merge([],[])).toEqual([]);
  });
});

describe('MergeSort function', function() {
  it('is able to sort two single-element arrays into one sorted array', function() {
    // test the merging algorithm
    expect(mergeSort([4, 2])).toEqual([2, 4]);
    expect(mergeSort([5,2,1,3])).toEqual([1,2,3,5]);
    expect(mergeSort([5,1,8])).toEqual([1,5,8]);
    expect(mergeSort([])).toEqual([]);
    // expect(mergeSort([4],[2])).toEqual([2,4])
  });
});
