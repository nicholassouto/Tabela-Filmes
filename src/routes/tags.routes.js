const { Router } = require("express");

const TagsController = require("../controllers/tagsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsRoutes = Router();
tagsRoutes.use(ensureAuthenticated);

const tagsController = new TagsController();

tagsRoutes.get("/", tagsController.index);
tagsRoutes.post("/:note_id/", tagsController.create);

module.exports = tagsRoutes;
