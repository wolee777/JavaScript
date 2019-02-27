var arr = [ 'zero', 'one', 'two' ];
console.log( arr.length );

arr.color = 'blue';
arr.name = 'number_array';
console.log( arr.length );

arr[3] = 'red';
console.log( arr.length );

console.dir( arr );

for ( var prop in arr ) {
	console.log( prop, arr[prop] );
}

for ( var i = 0; i < arr.length; i++ ) {
	console.log( i, arr[i] );
}

var arr1 = [ 'zero', 'one', 'two', 'three' ];
console.log( arr1 );

delete arr1[2];
console.log( arr1 );
console.log( arr1.length );

arr1.splice( 2, 1 );
console.log( arr1 );
console.log( arr1.length );
