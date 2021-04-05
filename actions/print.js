const n = require ("../components/note-components");
const gen = require ("./note-generator");

let print = () =>
{
	console.log(n.beat.beams);
	console.log(n.beat.tails);
	console.log(n.beat.heads);
}

let printRandomBars = (number) =>
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
}

module.exports = { print, printRandomBars };