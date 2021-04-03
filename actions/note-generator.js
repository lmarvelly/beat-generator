const n = require ("../components/note-components");

let addLineBreaks = () =>
{
	n.beat.beams += "\n";
	n.beat.tails += "\n";
	n.beat.heads += "\n";
}

let addMeasureSpacing = () =>
{
	n.beat.beams += "    ";
	n.beat.tails += "  ";
	n.beat.heads += "  ";
}

let addBarSpacing = () =>
{
	n.beat.beams += "   |";
	n.beat.tails += "  | ";
	n.beat.heads += "  | ";
}

let ifNewBeat = () =>
{
	if (n.newBeat) 
	{
		n.newBeat = false;
	}
	else
	{
		addMeasureSpacing();
	}
}

let eighthGenerator = (num) =>
{
	ifNewBeat();

	if (num > 4) 
	{
		return "Fatal error: More than 4";
	}

	if (num === 1)
	{
		singleEighth();
	}
	else
	{
		for (let i = 1; i < num; i++) 
		{
			n.beat.beams += n.beam;
			n.beat.tails += n.tail;
			n.beat.heads += n.head;
		}
		n.beat.tails += n.tail;
		n.beat.heads += n.head;
	}
}

let eighthNotes = (num = 0) =>
{
	if (num === 0) "Fatal error: Zero entered";
	else if (isNaN(num)) "Fatal error: Not a number";

	// find if there is an even amount of measures
	let evenMeasures = ((Math.floor(num / 4)) % 2) === 0;
	// full bars of 8 eighth notes
	let fullBars = Math.floor(num / 8);
	// remainding notes after a full bar
	let remainder = num % 4;

	if (num === 1)
	{
		singleEighth();
	}
	else
	{
		let barIndex = 0;
		for (barIndex; barIndex < fullBars; barIndex++)
		{
			eighthGenerator(4);
			eighthGenerator(4);
			addBarSpacing();
		}
		if (evenMeasures === false)
		{
			eighthGenerator(4);
		}
		if(remainder === 1)
		{
			singleEighth(remainder);
			addBarSpacing();
		}
		else if(remainder > 1)
		{
			eighthGenerator(remainder);
			addBarSpacing();
		}
	}
}

let singleEighth = () =>
{
	ifNewBeat();

	n.beat.tails += n.singleTail;
	n.beat.heads += n.head;
}


module.exports = { addLineBreaks, addMeasureSpacing, ifNewBeat, eighthGenerator, eighthNotes };