const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    //throw new NotImplementedError('Not implemented');
     // remove line with error and write your code here
     return (this.top || null)
     //if (!Boolean(this.top)) {
      /*
    if (this.top) {
       return this.top;
     } else {
      return null;
     }
     */
  }

  add(data) {

    if (!this.top) {
      this.top = {'data': data, 'left': null, 'right': null};
      return;
    }

    let el = this.top;

    while (el !== null) {
      if (data > el.data) {
        if (el.right === null) {
          let elNew = {'data': data, 'left': null, 'right': null}
          el.right = elNew;
          return;
        }
        el = el.right;

      } else if (data < el.data) {
        if (el.left === null) {
          let elNew = {'data': data, 'left': null, 'right': null}
          el.left = elNew;
          return;
        } 
        el = el.left;

      } else {
        return;
      }
    }

  }

  has(data) {
    let el = this.top;
    while (el !== null) {
      if (data === el.data) {
        return true;
      }
      el = (data > el.data) ? el.right : el.left;
    }
    return false;
  }

  find(data) {
    let el = this.top;
    while (el !== null) {
      if (data === el.data) {
        return el;
      }
      el = (data > el.data) ? el.right : el.left;
    }
    return null;
  }

  remove(data) {
    let el = this.top;
    if (el === null) {
      return;
    }
    
    if (data === el.data) {
      if (el.left !== null) {
        if (el.right !== null) {

          let elLeft = el.left;
          let maxRight = null;
          while (elLeft !== null) {
            maxRight = elLeft;
            elLeft = elLeft.right;
          }
          if (maxRight) {
            maxRight.right = el.right;
          }
        }
        this.top = el.left;
      } else {
        this.top = el.right;
      }
      return;
    }

    let parent = {'node': null, 'left': null};
    while (el !== null) {

      if (data === el.data) {

        let newNode = null;

        if (el.left !== null) {
          if (el.right !== null) {

            let elLeft = el.left;
            let maxRight = null;
            while (elLeft !== null) {
              maxRight = elLeft;
              elLeft = elLeft.right;
            }
            if (maxRight) {
              maxRight.right = el.right;
            }
          }
          newNode = el.left;
        } else {
          newNode = el.right;
        }

        if (parent.left) {
          parent.node.left = newNode;
        } else {
          parent.node.right = newNode;
        }
        
        return;
      }

      if (data > el.data) {
        parent.node = el;
        parent.left = false;
        el = el.right;
      } else {
        parent.node = el;
        parent.left = true;
        el = el.left;
      }
      
    }
    
  }

  min() {
    let res = null;
    let el = this.top;
    while (el !== null) {
      res = el.data;
      el = el.left;
    }
    return res;
  }

  max() {
    let res = null;
    let el = this.top;
    while (el !== null) {
      res = el.data;
      el = el.right;
    }
    return res;
  }
}

module.exports = {
  BinarySearchTree
};

/*
let tree = new BinarySearchTree;
let res = tree.root();
console.log('res ', res);

tree.add(7);
console.log('tree ', tree);
tree.add(5);
console.log('tree ', tree);
tree.add(10);
console.log('tree ', tree);

res = tree.root();//.data;
console.log('res ', res);
*/

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log('14 ', tree.has(14));
console.log('8 ', tree.has(8));
console.log('9 ', tree.has(9));
console.log('2 ', tree.has(2));
console.log('6 ', tree.has(6));
console.log('128 ', tree.has(128));
console.log('31 ', tree.has(31));
console.log('54 ', tree.has(54));
console.log('1 ', tree.has(1));
