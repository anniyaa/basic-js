const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  storage: [],

  getLength() {
    return this.chain.split('~~').length-1;
  },
  addLink(value) {
    value === ' ' ? this.chain.push(`(  )~~`) : this.chain.push(`( ${value} )~~`);
    return this;
  },
  removeLink(position) {
    if (!(Number.isInteger(position)) || this.chain[position-1]===undefined || position === 0) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position-1, 1)
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    this.storage = this.chain;
    this.chain = [];
    return this.storage.join('').slice(0, -2);
  }
};

module.exports = {
  chainMaker
};
