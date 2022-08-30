"use strict";

const publisher = require("./publisher.js");

class Printer {
  constructor() {
    this.messages = [];
  }

  printOnInterval() {
    setInterval(() => {
      console.log(this.messages);
    }, 1000);
  }

  addMessage(message) {
    this.messages.push(message);
  }
}

module.exports = {
  init: () => {
    const printer = new Printer();

    // ! Publisher
    publisher.addListener((message) => {
      printer.addMessage(message);
    });

    printer.printOnInterval();
  },
};
