const express = require("express");
const router = express.Router();

const showsController = require("../controllers/shows");


router.get("/", showsController.index);

router.post("/", showsController.create);

router.get("/:name", showsController.show);

router.put("/:name", showsController.update);

router.delete("/:name", showsController.destroy);


module.exports = router;