//Andrew Klump
//CMP344 February 2015
//postfix
//This program is designed to rewrite infix notation to postfix notation
//and then caluclate the answer using postfix.



//constructor for the stack
function Stack(){
	this.dataStore = {};
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

//the function that allows adding to the stack
function push(element){
	this.dataStore[this.top++] = element;
}

//the function to remove the top value from the stack also recieve value
function pop(){
	return this.dataStore[--this.top]
}

//The function to see the value at the top without removing it
function peek(){
	return this.dataStore[this.top-1]
}

//This clears the entire stack
function clear(){
	this.top = 0;
}

//this retruns the legnth of the stack
function length(){
	return this.top;
}


function convertToPost(equation){
	var final = new Stack();
	var temp = new Stack();

	for(var i = 0; i < equation.length; i++){
		temp.push(equation[i]);
	}

//testing should not be zero
console.log(temp);

	///TESTING SHOULD PRINT CONTENTS OF TEMP and should empty temp
	while(temp.length() > 0){
		console.log(temp.pop());	
	}

//testing should print out the stack,not contents
console.log(temp); 
}


convertToPost(12315);

