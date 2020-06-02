import { client } from './../config/database.ts'
import Beer from './../model/beerModel.ts'

class BeerRepository {
  async all() {
    return client.query('SELECT * FROM beers')
  }

  async find(id: number) {
    return client.query({ text: 'SELECT * FROM beers where id=$1', args: [id] })
  }

  async create(beer: Beer) {
    return client.query({
      text: 'INSERT INTO beers (name, price) values ($1, $2)',
      args: [beer.name, beer.price]
    })
  }

  async update(id: number, beer: Beer) {
    return client.query({
      text: 'UPDATE beers SET name=$1, price=$2 WHERE id=$3',
      args: [beer.name, beer.price, id]
    })
  }

  async delete(id: number) {
    return client.query({
      text: 'DELETE FROM beers WHERE id=$1',
      args: [id]
    })
  }
}

export default new BeerRepository()