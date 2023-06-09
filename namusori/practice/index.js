"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let test = new TestClass(1, 'lee');
// test.printInfo();
var Commands;
(function (Commands) {
    Commands["Quit"] = "Quit";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Add"] = "Add New Task";
    Commands[Commands["Name"] = 1] = "Name";
    Commands["Complete"] = "Complete Task";
    Commands["Purge"] = "Remove Completed Tasks";
})(Commands || (Commands = {}));
console.log(Commands[1]);
