"use strict";

const publisher = require("./publisher.js");

class ObjectB {
  // * The above is somewhat useful since objectA.js and printer.js are kept completely
  // * separate, though this pattern really starts being useful when many objects
  // * are used together.

  // * For example here is **objectB.js **which is similar to objectA, but prints
  // * a different message at a faster rate:

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
