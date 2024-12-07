const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("users");
});

module.exports = router;
