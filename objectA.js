"use strict";

const publisher = require("./publisher");

class ObjectA {
  // * Finally, an object to create messages can be created that notifies the publisher

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
