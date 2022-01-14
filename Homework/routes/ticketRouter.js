const express = require("express");
const router = express.Router();
const ticketControllers = require("../controllers/ticketControllers");

//read tickets
router.get('/read', ticketControllers.getAllTickets);
//read a special ticket
router.get('/read/:id', ticketControllers.getTicketById)
//create ticket
router.post('/create', ticketControllers.createNewTicket);
//update ticket
router.post('/update/:id', ticketControllers.updateTicket);
//delete ticket
router.get('/delete/:id', ticketControllers.deleteTicket);


module.exports = router;