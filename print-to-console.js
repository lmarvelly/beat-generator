const p = require ("./actions/print");

// Code for Node to read user input
// REMEMBER to close readline
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
 });
  
readline.question('How many bars do you want? ', number => 
{
	p.printRandomBars(number);

	readline.close();
});