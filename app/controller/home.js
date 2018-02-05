"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index(ctx) {
    // this.ctx.logger.info(this.ctx.helper.foo('debug'))
    const locations = await ctx.model.Location.findAll();
    let location;
    ctx.query.location
      ? (location = locations.find(
          ({ id }) => id === Number(ctx.query.location)
        ))
      : (location = {
          id: 290,
          name: "北京"
        });
    const hotPlayMovies = await ctx.service.home.getHotPlayMovies(location);
    // this.logger.info(hotPlayMovies);
    // this.ctx.body = hotPlayMovies;
    await ctx.render("page/home", { location, locations, hotPlayMovies });
  }
}

module.exports = HomeController;
