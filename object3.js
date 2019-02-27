var objA = {
	val : 40
};

var objB = objA;

console.log( objA.val );
console.log( objB.val );

objB.val = 50;
console.log( objA.val );
console.log( objB.val );

var a = 100;
var b = 100;

var objC = { value : 100 };
var objD = { value : 100 };
var objE = objD;

console.log( a == b );
console.log( objC == objD );
console.log( objD == objE );
