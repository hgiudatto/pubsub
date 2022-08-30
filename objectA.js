"use strict";

const publisher = require("./publisher");

class ObjectA {
  sendMessage() {
    publisher.notify("Object A");
  }

  createMessagesOnInterval() {
    setInterval(this.sendMessage, 1000);
  }
}

module.exports = {
  init: () => {
    const objectA = new ObjectA();
    objectA.createMessagesOnInterval();
  },
};
