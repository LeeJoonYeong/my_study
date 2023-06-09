"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestClass {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    printInfo() {
        console.log(`당신( ${this.name} )의 고유 번호는 ${this.id} 입니다. `);
    }
}
exports.default = TestClass;
