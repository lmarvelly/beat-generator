const beam =  " _";
const barsPerPage = 4;
const head = "o " ;
const singleEighthTail = " |)";
const normalSpacing = "    ";
const halfSpacing = "  ";
const tail = " |";

let newBeat = true;

class Bar
{
	constructor (barLength = 4)
	{
		this.beams = " |";
		this.tails = " |";
		this.heads = " |";
		this.addMeasureSpacing(normalSpacing);
		this.totalNotesValue = 0;
		this.barLength = barLength;
	}
	
	getBeams ()
	{
		return this.beams;
	}
	getTails ()
	{
		return this.tails;
	}
	getHeads ()
	{
		return this.heads;
	}
	getTotalNotesVal ()
	{
		return this.totalNotesValue;
	}
	getBar ()
	{
		return [ this.getBeams(), this.getTails(), this.getHeads()];
	}

	addToBeams ( beam )
	{
		this.beams = this.beams + beam;
		return this.beams
	}
	addToTails ( tails )
	{
		this.tails = this.tails + tails;
		return this.tails
	}
	addToHeads ( head )
	{
		this.heads = this.heads + head;
		return this.heads
	}
	addToTotalNotesValue ( value )
	{
		this.totalNotesValue = this.totalNotesValue + value;
		return this.totalNotesValue;
	}
	
	addMeasureSpacing(normalSpacing)
	{
		this.addToBeams(normalSpacing);
		this.addToTails(normalSpacing);
		this.addToHeads(normalSpacing);
	}
	addMeasureStartEnd ()
	{
		this.adjustBeamSpacing();

		this.addToBeams("|");
		this.addToTails("|");
		this.addToHeads("|");
	}
	addSingleEighthNote ()
	{
		this.addToTails(singleEighthTail);
		this.addToHeads(head + " ");
		this.addMeasureSpacing(normalSpacing);
		this.adjustBeamSpacing();
		this.addToTotalNotesValue(0.5);
		if( this.isMeasureCompleted() )
		{
			this.addMeasureStartEnd();
		}
	}
	addMultiEighthNotes ( num )
	{
		console.log( num );
		if ( num > 1 && num < 5)
		{
			let addSingleNote = false;
			let notes = num;
			this.addToBeams(" ");
			if ( num % 2 === 1)
			{
				notes = notes - 1;
				addSingleNote = true;
			}
			for (let i = 1; i < num; i++) 
			{
				this.addToBeams(beam + beam)
				this.addToTails(tail);
				this.addToHeads(head);
				this.addToTails(halfSpacing)
				this.addToHeads(halfSpacing)
				this.adjustBeamSpacing();
				this.addToTotalNotesValue(0.5);
				if( this.isMeasureCompleted() )
				{
					this.addMeasureStartEnd();
				}
			}
			this.addToTails(tail);
			this.addToHeads(head);

			if ( addSingleNote === true ) 
			{
				this.addSingleEighthNote();
			}
		}
	}
	addEighthNotes ( num )
	{
		if ( num === 1 ) 
		{
			this.addSingleEighthNote();
		}
		else
		{
			// TODO add code to add EigthNotes for numbers more than 4
			this.addMultiEighthNotes( num );
		}
	}
	addQuarterNote ( num )
	{
		for (let i = 0; i < num; i++) 
		{
			this.addToTails(tail);
			this.addToHeads(head);
			this.addMeasureSpacing(normalSpacing);
			this.adjustBeamSpacing();
			this.addToTotalNotesValue(1);
			if( this.isMeasureCompleted() )
			{
				this.addMeasureStartEnd();
			}
		}
	}

	adjustBeamSpacing ()
	{
		// while(bar.beams.length < bar.tails.length 				&& bar.beams.length != bar.tails.length)
		while ( bar.getBeams().length < bar.getTails().length && bar.getBeams().length != bar.getTails.length )
		{
			bar.addToBeams(" ");
		}
	}

	isMeasureCompleted ()
	{
		if (this.getTotalNotesVal() === this.barLength)
		{
			return true;
		}
		return false;
	}
}

let bar = new Bar(4); 
// bar.addQuarterNote(4);
bar.addEighthNotes(5);
// bar.addEighthNotes();
// bar.addEighthNotes();
// bar.addEighthNotes();

for (let i = 0; i < bar.getBar().length; i++) 
{
	console.log(bar.getBar()[i]);
}


