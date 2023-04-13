const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:[],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
   if(value === undefined) {
    this.chain.push('')
    return this
   } else {
    this.chain.push(value)
    return this
   }
  },
  removeLink(position) {
   if(position % 1 !== 0 || position > this.chain.length || position <= 0) {
    this.chain.length = 0
    throw new Error("You can't remove incorrect link!")
   }
   this.chain.splice(position - 1, 1)
   return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const chainResult = this.chain.map((value) => `( ${value} )`).join('~~')
    this.chain.length = 0
    return chainResult
  }
};

module.exports = {
  chainMaker
};
