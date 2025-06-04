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
    const roles = req.body;

    for (const role of roles) {
      const { name, url, info } = role;
      console.log("ROLE:", role);

      let newRole = new Role(name, url, JSON.stringify(info));
      newRole = await newRole.add();
    }

    res.status(201).json({ roles });
  } catch (err) {
    console.log(err);
  }
}