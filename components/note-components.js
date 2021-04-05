const beam =  " _";
const barsPerPage = 4;
const tail = " |";
const singleTail = " |)";
const head = "o " ;


let newBeat = true;

let beat = 
{
	beams: " |    ",
	tails: " |   ",
	heads: " |   "
}

module.exports = { barsPerPage, beam, tail, singleTail, head, newBeat, beat };