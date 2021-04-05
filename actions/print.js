const n = require ("../components/note-components");
const gen = require ("./note-generator");

const bar = new gen.Bar();

// let print = () =>
// {
// 	console.log(gen.bar.getBeams());
// 	console.log(gen.bar.getTails());
// 	console.log(gen.bar.getHeads());
// }

// let printRandomBars = (number) =>
// {
// 	number = Number(number);
// 	let randomArray = [];
// 	for (let i = 0; i < number; i++) 
// 	{
// 		randomArray.push(Math.floor((Math.random() * 2) + 1));
// 	}

// 	for (let i = 0; i < randomArray.length; i++) 
// 	{
// 		if (randomArray[i] === 1)
// 		{
// 			gen.quarterNotes(4);
// 		}
// 		else
// 		{
// 			gen.eighthNotes(8);
// 		}
// 	}

// 	print();
// }


console.log( bar.getBeams() );

module.exports = { print, printRandomBars };