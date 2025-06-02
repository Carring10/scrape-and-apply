const Role = require("../models/Roles");

exports.selectAllRoles = async (req, res) => {
    try {
        const [roles, _] = await Role.selectAll();

        res.status(200).json({ roles });
    } catch (err) {
        console.log(err);
    }
}

exports.addNewRole = async (req, res) => {
  try {
    const { name, url, info } = req.body;
    let role = new Role(name, url, JSON.stringify(info));

    role = await role.add();

    res.status(201).json({ role });
  } catch (err) {
    console.log(err);
  }
}