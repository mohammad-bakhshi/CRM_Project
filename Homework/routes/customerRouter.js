const express = require("express");
const router = express.Router();
const customerControllers = require("../controllers/customerControllers");

//read customers
router.get('/read', customerControllers.getAllCustomers);
//read a special customer
router.get('/read/:id', customerControllers.getCustomerById)
//create customer
router.post('/create', customerControllers.createNewCustomer);
//update customer
router.post('/update/:id', customerControllers.updateCustomer);
//delete customer
router.get('/delete/:id', customerControllers.deleteCustomer);


module.exports = router;