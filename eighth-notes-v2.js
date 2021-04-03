// The beam, tail, single eighth tail and head
let beam =  " _";
let tail = " |";
let singleTail = " |)"
let head = "o " ;
let newBeat = true;

// The measures beam,tails and heads
let beat = new Map([
	['beams', " "],
	['tails', ""],
	['heads', ""]
])

let eighthGenerator = (num) =>
{
	ifNewBeat();

	if (num > 4) 
	{
		return "Fatal error: More than 4";
	}

	for (let i = 1; i < num; i++) 
	{
		beat.set('beams', beat.get('beams') + beam);
		beat.set('tails', beat.get('tails') + tail);
		beat.set('heads', beat.get('heads') + head);	
	}
	beat.set('tails', beat.get('tails') + tail);
	beat.set('heads', beat.get('heads') + head);
}

let addLineBreaks = () =>
{
	beat.set('beams', beat.get('beams') + "\n");
	beat.set('tails', beat.get('tails') + "\n");
	beat.set('heads', beat.get('heads') + "\n");
}

let addMeasureSpacing = () =>
{
	beat.set('beams', beat.get('beams') + "    ");
	beat.set('tails', beat.get('tails') + "  ");
	beat.set('heads', beat.get('heads') + "  ");
}

let ifNewBeat = () =>
{
	if (newBeat) 
	{
		newBeat = false;
	}
	else
	{
		addMeasureSpacing();
	}
	console.log('New beat = ' + newBeat);
}

let print = () =>
{
	console.log(beat.get('beams'));
	console.log(beat.get('tails'));
	console.log(beat.get('heads'));
}

let singleEighth = () =>
{
	ifNewBeat();

	beat.set('tails', beat.get('tails') + singleTail);
	beat.set('heads', beat.get('heads') + head);
}

let eighthNotes = (num = 0) =>
{
	if (num === 0)
	{
		return "Fatal error: Zero entered";
	}
	else if (isNaN(num))
	{
		return "Fatal error: Not a number"
	}

	// full measures of 4 eighth notes
	let fullMeasures = Math.floor(num / 4);
	// remainding notes after a full bar
	let remainder = num % 4;

	if (num === 1)
	{
		singleEighth();
	}
	else
	{
		for (let index = 0; index < fullMeasures; index++) 
		{
			eighthGenerator(4);

		}
		if(remainder === 1)
		{
			singleEighth(remainder);
		}
		else if(remainder > 1)
		{
			eighthGenerator(remainder);
		}
	}

	print();
}

// Code for Node to read user input
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
 });
  
 readline.question('How many eighth notes do you want? ', number => 
 {
	number = Number(number); 

	eighthNotes(number);

	readline.close();
 });