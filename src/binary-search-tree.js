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
          let maxRight = el.left.max();
          maxRight.right = el.right;
        }
        this.top = el.left;
      } else {
        this.top = el.right;
      }
      return;
    }

    /*
    while (el !== null) {
      if (data === el.data) {
        el = null;
        return ;
      }
      el = (data > el.data) ? el.right : el.left;
    }
    */
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