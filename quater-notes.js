// Create indivitual measures like in eighth-notes

const n = require ("./components/note-components");

let quaterNotes = (num = 0) =>
{
	let gap = "    "; 

	if (num >= 1) 
	{
		n.tail += gap;
		n.head += gap;

		let tails = "";
		let heads = "";
		for (let index = 0; index < num; index++) 
		{
			tails += n.tail;
			heads += n.head;
		}
		tails += "\n";
		heads += "\n";

		notes = tails + heads;

		return notes;
	}
	else if (num === 0) return "Fatal Error: Number needs to be more than 0";
	else if (num > 4) return "Fatal Error: Number needs to be 4 or less (but more than zero)";

}

console.log(quaterNotes(5));