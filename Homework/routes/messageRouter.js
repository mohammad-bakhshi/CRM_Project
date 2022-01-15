const express = require("express");
const router = express.Router();
const messageControllers = require("../controllers/messageControllers");

//read customers
router.get('/read', messageControllers.getAllMessages);
//read a special customer
router.get('/read/:id', messageControllers.getMessageById)
//create customer
router.post('/create', messageControllers.createNewMessage);
//update customer
router.post('/update/:id', messageControllers.updateMessage);
//delete customer
router.get('/delete/:id', messageControllers.deleteMessage);


module.exports = router;