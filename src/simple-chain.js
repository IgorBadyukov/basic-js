const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (
        position < 1 ||
        position > this.getLength() ||
        isNaN(position)
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    for (let i = 0; i < this.chain.length; i++) {
      if (i === 0) {
        if (this.chain.length == 1) {
          str += `( ${this.chain[i]} )`;
        }
        else {
          str += `( ${this.chain[i]} )~`;
        }
      }
      else if (i === this.chain.length - 1) {
        str += `~( ${this.chain[i]} )`;
      }
      else {
        str += `~( ${this.chain[i]} )~`;
      }
    }
    this.chain = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
