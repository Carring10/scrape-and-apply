const connection = require("../config/connection");

class Roles {
    constructor(name, url, info) {
        this.name = name;
        this.url = url;
        this.info = info;
    }

    static selectAll() {
        let sql = "SELECT * FROM roles;";

        return connection.execute(sql);
    }
}

module.exports = Roles;