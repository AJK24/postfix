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
//console.log('I am pushing something '+ equation[i]);		
	
		//pushes to the final stack
		if(equation[i] >= '0' || equation[i] <= '9'){
			final.push(equation[i]);
		}
		//pushes to the temp stack
		else if(equation[i] == '+' || equation[i] == '-' || equation == '/' || equation[i] == '*'){
			temp.push(equation[i]);
		}
		//if invalid character will print
		else
			console.log("Erroe - invalid number");
	}

//testing should not be zero
console.log('length of temp ' + temp.length());
console.log('length of final ' + final.length());

	///TESTING SHOULD PRINT CONTENTS OF TEMP and should empty temp
	while(final.length() > 0 ){
		console.log(final.pop());	
	}

//testing should print out the stack,not contents
console.log("I am peeking " + temp.peek()); 
}


convertToPost("1+23-15");

