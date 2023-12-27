const express = require("express")
const router = express.Router()
const Controller = require("../controllers/PokemonController")


router.route("/")
.get(Controller.get)
.post(Controller.create)


router.route("/:id")
.get(Controller.getById)
.patch(Controller.patch)
.delete(Controller.remove)

router.route("/pdf/:id")
.get(Controller.createPdf)






module.exports = router