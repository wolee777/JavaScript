var colorArr = [ 'orange', 'yellow', 'blue', 'green', 'red' ];

console.log( colorArr[0] );
console.log( colorArr[1] );
console.log( colorArr[4] );

var emptyArr = [];
console.log( emptyArr[0] );

emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;
console.log( emptyArr );
console.log( emptyArr.length );

var arr = [];
console.log( arr.length );

arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[100] = 100;
console.log( arr.length );

var arr1 = [0, 1, 2];
console.log( arr1.length );

arr1.length = 5;
console.log( arr1 );

arr1.length = 2;
console.log( arr1 );
console.log( arr1[2] );

var arr2 = [ 'zero', 'one', 'two' ];

arr2.push( 'three' );
console.log( arr2 );

arr2.length = 5;
arr2.push( 'four' );
console.log( arr2 );
