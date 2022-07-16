const staffModel = require("../models/staff");

exports.getAllStaffs = async (req, res) => {
  try {
    const staffs = await staffModel.find({});

    res.status(200).json(staffs);
  } catch (error) {
    res.status(500).json({ error: "ຜິດພາດ ລອງອີກຄັ້ງ" });
  }
};
