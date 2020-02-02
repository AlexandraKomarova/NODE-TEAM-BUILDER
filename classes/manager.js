const Employee = require("./employee.js");

class Manager extends Employee {
    constructor (name, id, title, officeNumber) {
        super(name, id, title);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;

