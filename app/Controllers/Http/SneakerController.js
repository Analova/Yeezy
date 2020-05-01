"use strict";
const Sneaker = use("App/Models/Sneaker");

class SneakerController {
  async index({ view }) {
    return view.render("sneakers/index");
  }
  async create({ view }) {
    return view.render("sneakers/create");
  }
  async store({ request, view }) {
    try {
      const sneaker = new Sneaker();
      const data = request.post();

      sneaker.title = data.title;
      sneaker.image = data.image;
      sneaker.description = data.description;

      await sneaker.save();
      return "Saved to database";
    } catch (error) {
      console.log(error);
      return "Sorry there was an error check console";
    }
  }
  async show({ view }) {
    return view.render("sneakers/show");
  }
  async eidt({ view }) {
    return view.render("sneakers/edit");
  }
  async update({ view }) {
    return "Upddate page for the 1 sneaker";
  }
  async destroy({ view }) {
    return "Delete sneakers";
  }
}

module.exports = SneakerController;
