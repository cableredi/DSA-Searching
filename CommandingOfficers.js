const BinarySearchTree = require('../DSA-BST/BST');
const Queue = require('./queue');

const whosInCharge = (tree, values = []) => {
  const queue = new Queue();
  const node = tree;

  queue.enqueue(node);

  while (queue.first) {
    const node = queue.dequeue(); //remove from the queue
    values.push(node.value); // add that value from the queue to an array

    if (node.left) {
      queue.enqueue(node.left); //add left child to the queue
    }

    if (node.right) {
      queue.enqueue(node.right); // add right child to the queue
    }
  }

  return values;
}

function officers() {
  const officers = new BinarySearchTree();
  officers.insert(25, 'Captain Picard');
  officers.insert(20, 'Commander Riker');
  officers.insert(36, 'Commander Data');
  officers.insert(10, 'Lt. Cmdr. Worf');
  officers.insert(22, 'Lt. Cmdr. LaForge');
  officers.insert(40, 'Lt. Cmdr. Crusher');
  officers.insert(5, 'Lt. security-officer');
  officers.insert(38, 'Lieutenant Selar');

  return officers;
}

console.log('Whos in charge next: ', whosInCharge(officers()));
