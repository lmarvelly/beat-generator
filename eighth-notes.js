// The beam, tail, single eighth tail and head
let beam =  " _";
let tail = " |";
let singleTail = " |)"
let head = "o " ;

// The measures beam,tails and heads
let beams = " ";
let tails = "";
let heads = "";

// the whole measure
let measure;

let eighthGenerator = (num) =>
{
	if (num > 4) 
	{
		return "Fatal error: More than 4";
	}
	beams = " ";
	tails = "";
	heads = "";

	for (let i = 1; i < num; i++) 
	{
		beams += beam;
		tails += tail;
		heads += head;
	}

	beams += "\n";
	tails += " |\n";
	heads += "o\n";

	measure = beams + tails + heads;

	return measure;
}

let singleEighth = () =>
{
	tails = singleTail + "\n";
	heads = "o" + "\n";
	measure = tails + heads;

	return measure;
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
		console.log(singleEighth());
	}
	else
	{
		for (let index = 0; index < fullMeasures; index++) 
		{
			console.log(eighthGenerator(4));
		}
		if(remainder === 1)
		{
			console.log(singleEighth(remainder));
		}
		else if(remainder > 1)
		{
			console.log(eighthGenerator(remainder));
		}
	}
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