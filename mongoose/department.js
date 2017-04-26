const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: String,
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'employee' }]
});

departmentSchema.methods.print = function () {
    this.employees.forEach(employee => {
        console.log(this.name);

        if (employee.print) {
            employee.print();
        } else {
            console.log(employee);
        }
    });
};

module.exports = mongoose.model('department', departmentSchema);