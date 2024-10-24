const express = require("express");
const fs = require("fs");
const { dotClass, waferInfo, dotData } = require("../../../Data/circleData");
const router = express.Router();


router.get("/getWaferDotInfo", (req, res) => {
  res.send({
    data: dotData
  });
});

router.get("/getWaferInfo", (req, res) => {
  res.send({
    data: waferInfo
  });
});

module.exports = router;
