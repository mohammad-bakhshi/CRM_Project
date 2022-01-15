const db = require("../database/connection");

class Message {
    constructor(id, sender, body, createdAt, ticketId) {
        (this.id = id),
            (this.sender = sender),
            (this.body = body),
            (this.createdAt = createdAt),
            (this.ticketId = ticketId)
    }

    save() {
        let sql = `INSERT INTO message (id,sender,body,createdAt,ticketId) VALUES ('${this.id}','${this.sender}','${this.body}','${this.createdAt}','${this.ticketId}');`;
        return db.execute(sql);
    }

    update(id) {
        let sql = `UPDATE message SET sender ='${this.sender}',body='${this.body}',createdAt='${this.createdAt}',ticketId='${this.ticketId}' WHERE id = '${this.id}'`;
        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM message";
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM message WHERE id = ${id}`;
        return db.execute(sql);
    }

    static delete(id) {
        let sql = `DELETE FROM message WHERE id = ${id}`;
        return db.execute(sql);
    }
}

module.exports = Message;
