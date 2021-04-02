// connects beats to create faster notes
let beam;
// the tail of the note
let tail = " | ";
// heads of notes
let head = "o " ;
// the whole notes
let notes;

// beam = "", tail = "", head = ""
let quaterNotes = (num = 0) =>
{
	let gap = "    "; 

	if (num > 1) 
	{
		tail += gap;
		head += gap;

		let tails = "";
		let heads = "";
		for (let index = 0; index < num; index++) 
		{
			tails += tail;
			heads += head;
		}
		tails += "\n";
		heads += "\n";

		notes = tails + heads;

		return notes;
	}
	else return "";
}

console.log(quaterNotes(10));