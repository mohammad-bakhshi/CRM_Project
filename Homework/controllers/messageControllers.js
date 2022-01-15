const Message = require('../models/message');
const Ticket = require('../models/ticket');


exports.getAllMessages = async (req, res, next) => {
    try {
        let [messages, _] = await Message.findAll();
        res.status(200).json({ count: messages.length, messages: messages });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getMessageById = async (req, res, next) => {
    try {
        let messageId = req.params.id;
        let [message, _] = await Message.findById(messageId);
        res.status(200).json({ message: message[0] });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.createNewMessage = async (req, res, next) => {
    try {
        let [ticket, _] = await Ticket.findById(req.body.ticketId);
        if (ticket[0] === undefined) {
            res.json({ message: 'There is no ticket with this id' });
        }
        else {
            let message = new Message(req.body.id, req.body.sender, req.body.body, req.body.createdAt, req.body.ticketId);
            message = await message.save();
            res.status(201).json({ message: 'Message created successfully' });
        }
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.updateMessage = async (req, res, next) => {
    try {
        let messageId = req.params.id;
        let message = new Message(messageId, req.body.sender, req.body.body, req.body.createdAt, req.body.ticketId);
        message = await message.update();
        res.status(201).json({ message: 'Message was updated successfully' });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.deleteMessage = async (req, res, next) => {
    try {
        let messageId = req.params.id;
        await Message.delete(messageId);
        res.status(200).json({ message: 'Message was deleted successfully' });
    } catch (error) {
        console.log(error);
        next();
    }
}