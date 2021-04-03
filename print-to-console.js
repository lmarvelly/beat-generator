const n = require ("./components/note-components");
const gen = require ("./actions/note-generator");

let print = () =>
{
	console.log(n.beat.beams);
	console.log(n.beat.tails);
	console.log(n.beat.heads);
}

// Code for Node to read user input
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
 });
  
readline.question('How many eighth notes do you want? ', number => 
{
	number = Number(number); 
	gen.eighthNotes(number);
	print();

	readline.close();
});

