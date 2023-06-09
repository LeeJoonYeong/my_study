import TestClass from "./test";

// let test = new TestClass(1, 'lee');

// test.printInfo();

enum Commands {
	Quit = 'Quit',
	Toggle = 'Show/Hide Completed',
	Add = "Add New Task",
	Name = 1,
	Complete = "Complete Task",
	Purge = "Remove Completed Tasks",
}

console.log(Commands[1]);