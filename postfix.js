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





function doMath(variable, first, second){
	var equation = ''; //going to be returned as string

	if(variable == '*'){
		(first * second);
	}
	else if(variable == '/'){
		(first / second);

	}
	else if(variable == '+'){
		(first + second);
	}
	else if(variable == '-'){
		(first - second);
	}



}









function convertToPost(equation){
	var final = new Stack();
	var operators = new Stack();
//	var first = 0;
//	var second = 0;


	for(var i = 0; i < equation.length; i++){
//console.log('I am pushing something '+ equation[i]);		
	
		//pushes to the final stack
		if(equation[i] >= '0' &&  equation[i] <= '9'){
			final.push(equation[i]);
					}
		//pushes to the temp stack
		else if(equation[i] == '+' || equation[i] == '-' || equation == '/' || equation[i] == '*'){
			// push operator to operator stack
			operators.push(equation[i]);
			//add the next number in the equation to the final stack
			final.push(equation[i+1]);
			//add the operator from the operator stack to the final stack
			final.push(operators.pop());
			//must increment up one to count make the loop work properly since the next iteration was just pushed to final.
			i++;

		}
		//if invalid character will print
		else
			console.log("Error - invalid number");
	}

//peeking to the top of final should be -
//console.log(final.peek());

//testing should not be zero
//console.log('length of temp ' + operators.length());
//console.log('length of final ' + final.length());


//testing string to be printed
var postequ
	///TESTING SHOULD PRINT CONTENTS OF THE FINAL POST EQUATION
	while(final.length() > 0 ){
		postequ += final.pop();
	}
	console.log(postequ);
//	console.log("just checked final now printing operators which should be empty");
//	while(operators.length() > 0){
///		console.log(operators.pop());
//	}
//testing should print out the stack,not contents
//console.log("I am peeking " + temp.peek()); 
}














convertToPost("1+2-5");

