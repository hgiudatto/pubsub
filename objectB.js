"use strict";

const publisher = require("./publisher.js");

class ObjectB {
  sendMessage() {
    publisher.notify("ObjectB");
  }

  createMessagesOnInterval() {
    setInterval(this.sendMessage, 500);
  }
}

module.exports = {
  init: () => {
    const objectB = new ObjectB();
    objectB.createMessagesOnInterval();
  },
};
