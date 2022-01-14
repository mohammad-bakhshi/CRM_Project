const Customer = require('../models/customer');


exports.getAllCustomers = async (req, res, next) => {
    try {
        let [customers, _] = await Customer.findAll();
        res.status(200).json({ count: customers.length, customers: customers });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getCustomerById = async (req, res, next) => {
    try {
        let customerId = req.params.id;
        let [customer, _] = await Customer.findById(customerId);
        res.status(200).json({ customer: customer[0] });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.createNewCustomer = async (req, res, next) => {
    try {
        let customer = new Customer(req.body.id, req.body.type, req.body.name, req.body.income, req.body.createdAt, req.body.phoneNumber);
        customer = await customer.save();
        res.status(201).json({ message: 'Customer created successfully' });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.updateCustomer = async (req, res, next) => {
    try {
        let customerId = req.params.id;
        let customer = new Customer(customerId, req.body.type, req.body.name, req.body.income, req.body.createdAt, req.body.phoneNumber);
        customer = await customer.update();
        res.status(201).json({ message: 'Customer was updated successfully' });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.deleteCustomer = async (req, res, next) => {
    try {
        let customerId = req.params.id;
        let result = await Customer.delete(customerId);
        res.status(200).json({ result });
    } catch (error) {
        console.log(error);
        next();
    }
}