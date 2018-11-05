describe('Bubble Sort', function(){
  /*beforeAll(function () {

  })*/
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with length of 1', function(){
    expect( bubbleSort([2])).toEqual([2]);
  });
  it('handles an array with length greater than 1', function(){
    expect( bubbleSort([4,1,2])).toEqual([1,2,4]);
    expect( bubbleSort([3,1,3,5])).toEqual([1,3,3,5]);
  });
});
