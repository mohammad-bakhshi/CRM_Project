const Ticket = require('../models/ticket');


exports.getAllTickets = async (req, res, next) => {
    try {
        let [tickets, _] = await Ticket.findAll();
        res.status(200).json({ count: tickets.length, tickets: tickets });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getTicketById = async (req, res, next) => {
    try {
        let ticketId = req.params.id;
        let [ticket, _] = await Ticket.findById(ticketId);
        res.status(200).json({ ticket: ticket[0] });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.createNewTicket = async (req, res, next) => {
    try {
        let ticket = new Ticket(req.body.id, req.body.status, req.body.title, req.body.description, req.body.createdAt, req.body.solution);
        ticket = await ticket.save();
        res.status(201).json({ message: 'Ticket created successfully' });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.updateTicket = async (req, res, next) => {
    try {
        let ticketId = req.params.id;
        let ticket = new Ticket(ticketId, req.body.status, req.body.title, req.body.description, req.body.createdAt, req.body.solution);
        ticket = await ticket.update();
        res.status(201).json({ message: 'Ticket was updated successfully' });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.deleteTicket = async (req, res, next) => {
    try {
        let ticketId = req.params.id;
        let result = await Ticket.delete(ticketId);
        res.status(200).json({ message:'Ticket was deleted successfully' });
    } catch (error) {
        console.log(error);
        next();
    }
}