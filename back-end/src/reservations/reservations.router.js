const router = require("express").Router();
const controller = require("./reservations.controller");

router.route("/").get(controller.list).post(controller.create);
router.route('/:reservationId').put(controller.update).get(controller.read)

module.exports = router;
