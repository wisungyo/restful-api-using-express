const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("You are on users.")
});

router.get("/specific", (req, res) => {
    res.send("You are on users/specific")
});

module.exports = router;