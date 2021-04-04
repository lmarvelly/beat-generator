const n = require ("./components/note-components");
const gen = require ("./actions/note-generator");

let print = () =>
{
	console.log(n.beat.beams);
	console.log(n.beat.tails);
	console.log(n.beat.heads);
}

// Code for Node to read user input
// REMEMBER to close readline
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
 });
  
readline.question('How many bars do you want? ', number => 
{
	number = Number(number);
	let randomArray = [];
	for (let i = 0; i < number; i++) 
	{
		randomArray.push(Math.floor((Math.random() * 2) + 1));
	}

	for (let i = 0; i < randomArray.length; i++) 
	{
		if (randomArray[i] === 1)
		{
			gen.quarterNotes(4);
		}
		else
		{
			gen.eighthNotes(8);
		}
	}

	print();

	readline.close();
});