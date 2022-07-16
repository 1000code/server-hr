const express = require("express");
const router = express.Router();

//Controller
const { getAllStaffs } = require("../controllers/staffController");

router.get("/staff-add", getAllStaffs);

module.exports = router;
