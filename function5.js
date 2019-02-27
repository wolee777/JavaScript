// myObject 객체 생성
var myObject = {
	name : 'foo',
	sayName : function() {
		console.log( this.name );
	}
};

// otherObject 객체 생성
var otherObject = {
	name : 'bar'
};

// otherObject.sayName() 메서드
otherObject.sayName = myObject.sayName;

// sayName() 메서드 호출
myObject.sayName();
otherObject.sayName();
console.log( '-----------------------------------------------------' );

var foo = "I'm foo";

console.log( foo );
console.log( window.foo );
console.log( '-----------------------------------------------------' );

var test = 'This is test';
console.log( window.test );

// sayFoo() 함수
var sayFoo = function() {
	console.log( this.test );
}

sayFoo();
console.log( '-----------------------------------------------------' );

// 전역 함수 value 정의
var value = 100;

// myObject 객체 생성
var myObject = {
	value : 1,
	func1 : function () {
		var that = this;
			
		this.value += 1;
		console.log( 'func1() called. this.value : ' + this.value );
		
		// func2() 내부 함수
		func2 = function() {
			//this.value += 1;
			//console.log( 'func2() called. this.value : ' + this.value );
			
			that.value += 1;
			console.log( 'func2() called. this.value : ' + that.value );
			// func3() 내부 함수 
			func3 = function () {
				//this.value += 1;
				//console.log( 'func3() called. this.value : ' + this.value );
				
				that.value += 1;
				console.log( 'func3() called. this.value : ' + that.value );
			}
			
			func3();
		}
		
		func2();
	}
};

myObject.func1();
console.log( '-----------------------------------------------------' );
