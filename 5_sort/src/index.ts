import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numColl = new NumbersCollection([-1000,3,-5,0])
numColl.sort();
console.log(numColl.data);

const charCol = new CharactersCollection("Gabriel");
charCol.sort()
console.log(charCol.data);

const linkedList = new LinkedList();
linkedList.add(54);
linkedList.add(4);
linkedList.add(5);
linkedList.add(-54);

linkedList.sort();
linkedList.print();