const db = require("../database/connection");

class Customer {
    constructor(id, type, name, income, createdAt, phoneNumber) {
        (this.id = id),
            (this.type = type),
            (this.name = name),
            (this.income = income),
            (this.createdAt = createdAt),
            (this.phoneNumber = phoneNumber)
    }

    save() {
        let sql = `INSERT INTO customer (id,type,name,income,createdAt,phoneNumber) VALUES ('${this.id}','${this.type}','${this.name}','${this.income}','${this.createdAt}','${this.phoneNumber}');`;
        return db.execute(sql);
    }

    update() {
        let sql = `UPDATE customer SET type='${this.type}',name ='${this.name}',income='${this.income}',createdAt='${this.createdAt}',phoneNumber='${this.phoneNumber}' WHERE id = '${this.id}'`;
        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM customer";
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM customer WHERE id = ${id}`;
        return db.execute(sql);
    }

    static delete(id) {
        let sql = `DELETE FROM customer WHERE id = ${id}`;
        return db.execute(sql);
    }
}

module.exports = Customer;