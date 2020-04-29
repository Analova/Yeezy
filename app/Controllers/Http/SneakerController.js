"use strict";

class SneakerController {
  async index() {
    return "All sneakers page";
  }
  async create() {
    return "Show create page";
  }
  async store() {
    return "Save 1 sneaker page";
  }
  async show() {
    return "Show  page for the 1 sneaker";
  }
  async eidt() {
    return "Edit page for the 1 sneaker";
  }
  async update() {
    return "Upddate page for the 1 sneaker";
  }
  async destroy() {
    return "Delete sneakers";
  }
}

module.exports = SneakerController;
