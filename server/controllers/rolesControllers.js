const Roles = require("../models/Roles");

exports.selectAllRoles = async (req, res) => {
    try {
        const [roles, _] = await Roles.selectAll();

        res.status(200).json({ roles });
    } catch (err) {
        console.log(err);
    }
}