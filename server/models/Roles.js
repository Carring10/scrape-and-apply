const connection = require("../config/connection");

class Role {
    constructor(name, url, info) {
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
      name,
      url,
      info
    )
    VALUES(
      '${this.name}',
      '${this.url}',
      '${this.info}'
    )
    `;

        const newRole = connection.execute(sql);

        return newRole;
    }
}

module.exports = Role;