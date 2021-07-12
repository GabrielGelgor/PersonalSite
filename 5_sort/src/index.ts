import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numColl = new NumbersCollection([-1000,3,-5,0])
const charCol = new CharactersCollection("Gabriel");

const sorter = new Sorter(numColl);
sorter.sort();
console.log(`Numbers: ${numColl.data}`);

const sorterC = new Sorter(charCol);
sorterC.sort();
console.log(`Letters: ${charCol.data}`);

