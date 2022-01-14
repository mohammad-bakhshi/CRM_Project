const db = require("../database/connection");

class Manager {
    constructor(id, name, phoneNumber, nationalCode) {
        (this.id = id),
            (this.name = name),
            (this.phoneNumber = phoneNumber),
            (this.nationalCode = nationalCode)
    }

    save() {
        let sql = `INSERT INTO manager (id,name,phoneNumber,nationalCode) VALUES ('${this.id}','${this.name}','${this.phoneNumber}','${this.nationalCode}');`;
        return db.execute(sql);
    }

    update(id) {
        let sql = `UPDATE manager SET name ='${this.name}',phoneNumber='${this.phoneNumber}',nationalCode='${this.nationalCode}' WHERE id = '${this.id}'`;
        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM manager";
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM manager WHERE id = ${id}`;
        return db.execute(sql);
    }

    static delete(id) {
        let sql = `DELETE FROM manager WHERE id = ${id}`;
        return db.execute(sql);
    }
}

module.exports = Manager;
