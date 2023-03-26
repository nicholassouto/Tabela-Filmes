const knex = require("../database/knex");

class TagsController {
  async create(request, response) {
    const { name } = request.body;
    const { note_id, user_id } = request.params;

    const [tag_id] = await knex("movie_tags").insert({
      name,
      note_id,
      user_id,
    });

    response.json();
  }

  async index(request, response) {
    const { user_id } = request.params;

    const tags = await knex("movie_tags").where({ user_id });

    return response.json(tags);
  }
}

module.exports = TagsController;
