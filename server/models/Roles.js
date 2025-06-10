const connection = require("../config/connection");

class Role {
    constructor(company, name, url, info) {
        this.company = company;
        this.name = name;
        this.url = url;
        this.info = info;
    }

    static selectAll() {
        let sql = "SELECT * FROM roles;";

        return connection.execute(sql);
    }

    add() {
        let sql = `
        INSERT INTO roles(
        company,
        name,
        url,
        info
        )
        VALUES(
        '${this.company}',
        '${this.name}',
        '${this.url}',
        '${this.info}'
        )
        `;

        const newRole = connection.execute(sql);

        return newRole;
    }

    static refresh() {
        let sql = "TRUNCATE TABLE roles;";

        return connection.execute(sql);
    }
}

module.exports = Role;