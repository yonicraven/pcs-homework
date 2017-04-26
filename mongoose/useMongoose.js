const mongoose = require('mongoose'),
    Employee = require('./employee'),
    Department = require('./department');

mongoose.connect('mongodb://127.0.0.1:27017/employee2');

mongoose.connection.on('error', err => {
    console.error(err);
});

mongoose.connection.on('open', () => {
    console.log('connected');

    const donald = new Employee({
        name: {
            first: 'Donald',
            last: 'Trump'
        },
        salary: 10000,
        department: 'president',
        age: 70
    });

    /*donald.print();
    donald.name.full = 'Hillary Clinton';*/
    donald.save((err, result) => {
        const computers = new Department({
            name: 'computer'
        }),
            accountants = new Department({
                name: 'accountant'
            });

        computers.employees.push(donald);
        accountants.employees.push(donald);

        computers.save((err, res) => {
            accountants.save((e, r) => {

                Department.find().populate('employees').exec((err, lists) => {
                    lists.forEach(list => {
                        list.print();
                    });
                });
            });
        });
    });
    //donald.print();

    /*const noLastName = new Contact({
        name: {
            first: 'Donald'
        },
        email: 'dtrump@whitehouse.gov',
        phone: '123-456-7890'
    });

    noLastName.save((err, res) => {
        console.error(err);
    });*/

    /*Contact.find({ 'name.last': 'Clinton' }, (err, contacts) => {
        if (err) {
            console.error(err);
        } else {
            contacts.forEach(contact => {
                console.log(contact);
            });
        }
    });*/

    /*Contact.find({ 'name.last': 'Clinton' }).limit(2).exec((err, contacts) => {
        if (err) {
            console.error(err);
        } else {
            contacts.forEach(contact => {
                console.log(contact);
            });
        }
    });*/
});