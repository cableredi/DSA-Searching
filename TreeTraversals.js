const BinarySearchTree = require('../DSA-BST/BST');

const preOrder = (bst) => {
  console.log({ preOrder: bst.key });

  if (bst.left) {
      preOrder(bst.left);
  }
  if (bst.right) {
      preOrder(bst.right);
  }
};

const inOrder = (bst) => {  
  if (bst.left) {
    inOrder(bst.left);
  }

  console.log({ inOrder: bst.key });

  if (bst.right) {
    inOrder(bst.right);
  }
};

const postOrder = (bst) => {  
  if (bst.left) {
    postOrder(bst.left);
  }

  if (bst.right) {
    postOrder(bst.right);
  }

  console.log({ postOrder: bst.key });
};

const order = new BinarySearchTree();
order.insert('25', 25);
order.insert('15', 15);
order.insert('50', 50);
order.insert('10', 10);
order.insert('24', 24);
order.insert('35', 35);
order.insert('70', 70);
order.insert('04', 04);
order.insert('12', 12);
order.insert('18', 18);
order.insert('31', 31);
order.insert('44', 44);
order.insert('66', 66);
order.insert('90', 90);
order.insert('22', 22);
preOrder(order);
inOrder(order);
postOrder(order);