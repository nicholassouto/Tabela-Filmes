const { Router } = require("express");

const TagsController = require("../controllers/tagsController");

const tagsRoutes = Router();

const tagsController = new TagsController();

tagsRoutes.get("/:user_id", tagsController.index);
tagsRoutes.post("/:note_id/:user_id", tagsController.create);

module.exports = tagsRoutes;
