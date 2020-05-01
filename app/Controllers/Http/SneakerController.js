"use strict";

class SneakerController {
  async index({ view }) {
    return view.render("sneakers/index");
  }
  async create({ view }) {
    return view.render("sneakers/create");
  }
  async store({ view }) {
    return "Save 1 sneaker page";
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
