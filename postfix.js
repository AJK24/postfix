//Andrew Klump
//CMP344 February 2015
//postfix
//This program is designed to rewrite infix notation to postfix notation
//and then caluclate the answer using postfix.



//both stacks must be global in order to only use two stacks
//final for equation
var final = new Stack();
//operators used for the original operators until equation reversed, then used for the entire equation
var operators = new Stack();



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
	var count = 2; //set for the first number to be popped = second
	var answer = ''; //the answer that will be finalized and returned

	while(operators.length > 1){
		//this makes the top the temperary value to be judeged
		var temp =  operators.pop();
	
		//checking for if statements
		if(temp == '*' || temp == '/' || temp == '+' || temp == '-'){
			variable = temp;
	
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
		} //end variable if statments

		//first number popped and should be second number on equation
		else if(count == 2){
			second = operators.pop();
			count = 1;
		}
		
		//if the second number popped but should be first number in equ
		else if(count == 1){
			first = operators.pop();
			count = 3;
		}
		//if all three variables are full execute the math
		else if(count == 3){
			if(variable == '*'){
                              answer =  (first * second);
                        }
                        else if(variable == '/'){
                              answer = (first / second);
                        }
                        else if(variable == '+'){
                              answer = (first + second);
                        }
                        else if(variable == '-'){
                              answer = (first - second);
                        }
		
			//pushes the answer back to the top of the stack
			operators.push(answer);	
		
		}
	
	} //end while


	return answer
}//end function









function convertToPost(equation){

	//prints out the orignial equation
console.log(equation);



//following the algorithm
	for(var i = 0; i < equation.length; i++){
		//if number push to stack
		//pushes to the final stack
		if(equation[i] >= '0' &&  equation[i] <= '9'){
			final.push(equation[i]);
		}
		//if operator push to operator stack, then push 2 numbers and 
		//push the operator back on

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



//testing string to be printed
//var postequ = '';


	

//this code reverses the the order of final, it is placed in 
//the incorrect order 	-5+21	- has to be flipped to 12+5-
//reverses the order
	while(final.length() >  0 ){
		operators.push(final.pop());
		}


//USE THIS TO POP FROM TEMP TO GET CORRECT ORDER
	//cannot run rest of program because it will be popped, only for testing
//then prints the order properly
//	while(operators.length() > 0){
//		postequ += operators.pop();
//	}


///	console.log(postequ);
}



////MAIN//////////////




//should print the original only, but does convert it to postfix, just not printed
convertToPost("1+2-5");

//prints out the answer
console.log(doMath(convertToPost(1+2-5)));


console.log(doMath(convertToPost(1-3+9*10/4+8)));
