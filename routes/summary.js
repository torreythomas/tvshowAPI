const express = require("express");
const router = express.Router();

const summaryController = require("../controllers/summary");


router.get("/", summaryController.index);

router.post("/", summaryController.create);

router.get("/:name", summaryController.show);

router.put("/:name", summaryController.update);

router.delete("/:name", summaryController.destroy);


module.exports = router;