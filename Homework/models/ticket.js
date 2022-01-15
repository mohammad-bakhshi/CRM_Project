const db = require("../database/connection");

class Ticket {
    constructor(id, status, title, description, createdAt, solution, pcmId) {
        (this.id = id),
            (this.status = status),
            (this.title = title),
            (this.description = description),
            (this.createdAt = createdAt),
            (this.solution = solution),
            (this.pcmId = pcmId)
    }

    save() {
        let sql = `INSERT INTO ticket (id,status,title,description,createdAt,solution,pcmId) VALUES ('${this.id}','${this.status}','${this.title}','${this.description}','${this.createdAt}','${this.solution}','${this.pcmId}');`;
        return db.execute(sql);
    }

    update() {
        let sql = `UPDATE ticket SET type='${this.status}',name ='${this.title}',income='${this.description}',createdAt='${this.createdAt}',phoneNumber='${this.phoneNumber}',pcmId='${this.pcmId}' WHERE id = '${this.id}'`;
        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM ticket INNER JOIN pcm ON ticket.pcmId=pcm.id";
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM ticket WHERE id = ${id}`;
        return db.execute(sql);
    }

    static delete(id) {
        let sql = `DELETE FROM ticket WHERE id = ${id}`;
        return db.execute(sql);
    }
}

module.exports = Ticket;