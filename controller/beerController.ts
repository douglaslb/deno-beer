import { RouterContext } from 'https://deno.land/x/oak/mod.ts'
import beerService from './../services/beerServices.ts'

class BeerController {
  async index(context: RouterContext) {
    const beers = await beerService.getAllBeers()
    context.response.headers.set('Content-Type', 'application/json')
    context.response.body = { data: beers }
  }

  async show(context: RouterContext) {
    const { id } = context.params
    const beer = await beerService.getBeerById(parseInt(id!))
    context.response.headers.set('Content-Type', 'application/json')
    context.response.body = { data: beer }
  }

  async store(context: RouterContext) {
    const result = await context.request.body(
      { contentTypes: { text: ["application/json"] } }
    )
    const beer = result.value

    await beerService.createBeer(beer)
    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { message: "success" };
  }

  async update(context: RouterContext) {
    const result = await context.request.body(
      { contentTypes: { text: ["application/json"] } },
    );
    const beer = result.value;
    const { id } = context.params;
    await beerService.updateBeer(parseInt(id!), beer);

    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { message: "success" };
  }

  async delete(context: RouterContext) {
    const { id } = context.params

    await beerService.deleteBeer(parseInt(id!))

    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { message: "success" };
  }
}

export default new BeerController()