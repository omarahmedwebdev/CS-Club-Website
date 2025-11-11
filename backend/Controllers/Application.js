const App = require("../Models/ApplicationModel");

const addApp = async (req, res) => {
    const { name, email, phone, school, ess1 , ess2 , ess3 , ai1, ai2, robo1, robo2 , market1, market2 , market3 , hr1, hr2, hr3, ps1, ps2, ps3, ps4 } = req.body;

    try {
        const newApp = await App.create({ name, email, phone, school, ess1 , ess2 , ess3 , ai1, ai2, robo1, robo2 , market1, market2 , market3 , hr1, hr2, hr3, ps1, ps2, ps3, ps4 });
        res.status(201).json({ message: "User Created Successfully", newApp  });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {addApp};
