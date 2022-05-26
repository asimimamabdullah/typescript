"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //base class
        // private id: string;
        // private name: string;
        this.employees = []; //it is a private property now and it is only accessible inside the class
        // this.name = n;
        // console.log(this.fiscalYear); // not applicable because this cannot call static props
        console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// you can't access static property or method into non static methods or properties
// and static methods or properties are accessible with this keyword because it detaches the property from this class
// if you want to run static property or method you have to use the class name then the property name
Department.fiscalYear = 2022;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error("No Report found.");
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error("Please a pass in a valid value");
        this.addReport(value);
    }
    static getInstance() {
        // if(this.instance){ //this can be used too
        if (AccountingDepartment.instance) {
            // return this.instance
            return AccountingDepartment.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    describe() {
        console.log("Accounting Department - ID: ", this.id);
    }
    addEmployee(name) {
        if (name === "Asim")
            return;
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee("Asim");
console.log(`static employee: ${employee1}. fiscal year: ${Department.fiscalYear}`);
// rename accounting to it to make more sense
// const accounting = new ITDepartment("d1", ["Asim"]);
const it = new ITDepartment("d1", ["Asim"]);
// accounting.addEmployee("Asim");
// accounting.addEmployee("Imam");
it.addEmployee("Asim");
it.addEmployee("Imam");
// this is only applicable if the property is not private
// accounting.employees[2] = "Abdullah";
// accounting.describe();
// accounting.printEmployeeInformation();
it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();
console.log("it department: ", it);
// this is ok if class doesn't have a private constructor
// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log("for private constructor 'accounting'", accounting, accounting2);
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong.....");
console.log(`calling getter ${accounting.mostRecentReport}`);
accounting.addEmployee("Asim");
accounting.addEmployee("Abdullah");
accounting.addEmployee("Imam");
// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
//this is a new object now and it does not have the scope of Department class/object so describe() will not return anything
// const accountingCopy = { describe: accounting.describe };
// instead we will add a new property in that object which we are calling to work this properly like that
// const accountingCopy = { name: "Asim", describe: accounting.describe };
//
// accountingCopy.describe();
//# sourceMappingURL=app.js.map