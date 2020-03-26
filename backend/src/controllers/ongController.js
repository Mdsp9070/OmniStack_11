const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  async create(Request, Response) {
    const { name, email, wpp, city, uf } = Request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      id,
      name,
      email,
      wpp,
      city,
      uf
    });

    return Response.json({ id });
  },

  async delete(Request, Response) {
    const { auth } = Request.params;

    const ong = await connection("ongs")
      .where("id", auth)
      .select("id")
      .first();

    if (!ong) {
      return Response.status(401).json({ error: "Operation not permitted" });
    }

    await connection("ongs")
      .where("id", auth)
      .delete();

    return Response.status(204).send();
  }
};
