const db = require("../database/connection");

class PCM {
    constructor(managerId, customerId, projectId) {
            (this.managerId = managerId),
            (this.customerId = customerId),
            (this.projectId = projectId)
    }

    save() {
        let sql = `INSERT INTO pcm (managerId,customerId,projectId) VALUES ('${this.managerId}','${this.customerId}','${this.projectId}');`;
        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM pcm";
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM pcm WHERE id = ${id}`;
        return db.execute(sql);
    }

    static delete(id) {
        let sql = `DELETE FROM pcm WHERE id = ${id}`;
        return db.execute(sql);
    }
}

module.exports = PCM;