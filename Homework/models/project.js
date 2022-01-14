const db = require('../database/connection');

class Project {
    constructor(id, title, description) {
        this.id = id,
            this.title = title,
            this.description = description;
    }

    save() {
        let sql = `INSERT INTO project (id,title,description) VALUES (${this.id},'${this.title}','${this.description}');`;
        return db.execute(sql);
    }

    update()
    {
        let sql=`UPDATE project SET title =${this.title},description=${this.description} WHERE id = ${this.id}`;
        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM project";
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM project WHERE id = ${id}`;
        return db.execute(sql);
    }

    static delete(id) {
        let sql = `DELETE FROM project WHERE id = ${id}`
        return db.execute(sql);
    }
}

module.exports = Project;