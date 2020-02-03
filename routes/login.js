var express = require("express");
var router = express.Router();

// == 값만 똑같으면 됨
// === 값과 타입이 똑같아야함

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render("login", { title: "login" });
  //console.log(`${req.query.id} ${req.query.pw}`);
});
router.post("/check", function(req, res, next) {
  // const id = req.query.id;
  // const pw = req.query.pw;

  const id = req.body.id;
  const pw = req.body.pw;

  console.log(`${id} ${pw}`);
  if (id === "" || pw === "") {
    res.send("login failed");
  } else {
    res.send("login success");
  }
});
// router.get("/check", function(req, res, next) {
//   const id = req.query.id;
//   const pw = req.query.pw;
//   console.log(`${id} ${pw}`);
//   if (id === "" || pw === "") {
//     res.send("login failed");
//   } else {
//     res.send("login success");
//   }
// });

module.exports = router;
