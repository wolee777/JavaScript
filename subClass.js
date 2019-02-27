function subClass( obj ) {
	var parent = this === window ? Function : this; 	// Node.js의 경우에는 global을 사용한다.
	var F = function() {};
	
	var child = function() {
		var _parent = child.parent;
		
		if ( _parent && _parent !== Function ) {
			_parent.apply( this, arguments );
		}
	};
	
	F.prototype = parent.prototype;
	child.prototype = new F();
	child.prototype.constructor = child;
	child.parent = parent;
	child.subClass = arguments.callee;
	
	for ( var i in obj ) {
		if ( obj.hasOwnProperty( i ) ) {
			child.prototype[i] = obj[i];
		}
	}
	
	return child;
}
console.log( "----------------------------------------------" );

var person_obj = {
	_init : function() {
		console.log( "person init" );
	},
	getName : function() {
		return this._name;
	},
	setName : function( name ) {
		this._name = name;
	}
};

var student_obj = {
	_init : function() {
		console.log( "student init" );
	},
	getName : function() {
		return "Student Name : " + this._name;
	}
};

var Person = subClass( person_obj );		// Person class 정의
var person = new Person();					// person init 출력

console.dir( Person );
console.dir( person );
console.log( "----------------------------------------------" );

person.setName( "zzoon" );
console.log( person.getName() );
console.log( "----------------------------------------------" );

var Student = Person.subClass( student_obj );		// Student class 정의
var student = new Student();						// person init, student init 출력

console.dir( Student );
console.dir( student );
console.log( "----------------------------------------------" );

student.setName( "iamgildong" );
console.log( student.getName() );

console.log( "----------------------------------------------" );
console.log( Person.toString() );
console.log( "----------------------------------------------" );

var person2 = function( arg ) {
	var name = undefined;
	
	return {
		_init : function( arg ) {
			name = arg ? arg : "zzoon";
		},
		getName : function() {
			return name;
		},
		setName : function( arg ) {
			name = arg;
		}
	};
}

Person= subClass( person2() );
var iamgildong = new Person( "iamgildong" );

console.dir( Person );
console.dir( iamgildong );
console.log( "----------------------------------------------" );

console.log( iamgildong.getName() );
console.log( "----------------------------------------------" );

Student = Person.subClass();
student = new Student( "student" );

console.dir( Student );
console.dir( student );
console.log( "----------------------------------------------" );

console.log( student.getName() );
console.log( "----------------------------------------------" );
