import beerRepository from './../repositories/beerRepository.ts'
import Beer from './../model/beerModel.ts'

class BeerService {
  getAllBeers = async () => {
    const result = await beerRepository.all()
    const beers = new Array<Beer>()

    result.rows.map((beer) => {
      var temp: any = {}
      result.rowDescription.columns.map((item, index) => {
        temp[item.name] = beer[index]
      })
      beers.push(temp)
    })
    return beers
  }

  getBeerById = async (id: number) => {
    const result = await beerRepository.find(id)

    var beer: any = {}

    result.rows.map((items) => {
      result.rowDescription.columns.map((item, index) => {
        beer[item.name] = items[index]
      })
    })
    return beer
  }

  createBeer = async (beer: Beer) => {
    return await beerRepository.create(beer)
  }

  update = async (id: number, beer: Beer) => {
    return await beerRepository.update(id, beer)
  }

  delete = async (id: number) => {
    return await beerRepository.delete(id)
  }

}

export default new BeerService()