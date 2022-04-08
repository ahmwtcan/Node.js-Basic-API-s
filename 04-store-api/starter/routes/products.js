const express = require("express");
const router = express.Router()
const {getAllprodutcs,getAllprodutcsStatic} = require("../controllers/products");



router.route("/").get(getAllprodutcs)

router.route("/static").get(getAllprodutcsStatic)

module.exports = router;

