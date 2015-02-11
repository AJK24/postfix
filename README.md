# postfix
CMP344 Andrew Klump ch4 Postifix calculator

This converts an infix equation to postfix equation 
	uses convertToPost(equation);

Then it does the math using the postfix form
	This uses doMath(postfix equation);


The examples below are combining the functions

However, just using convertToPost prints out the postfix equation

But using both convertToPost and doMath inside Console.log does not print the postfix equation only a blank space and then the answer.




convertToPost("1+2-5");

//prints out the answer
console.log(doMath(convertToPost(1+2-5)));



convertToPost("1-3+9*10/4+8");
console.log(doMath(convertToPost(1-3+9*10/4+8)));
