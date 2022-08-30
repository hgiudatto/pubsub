"use strict";

// * The following runs in Node.js, but by changing the import/export strategy
// * can easily run in a browser. It shows how one object adds items to a list
// * at an interval while another prints the results of the list periodically.

// * Now they can all be run through a basic init script

const printer = require("./printer.js");
const objectA = require("./objectA.js");
const objectB = require("./objectB.js");
printer.init();
objectA.init();
objectB.init();
