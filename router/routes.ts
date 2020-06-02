import { Router } from 'https://deno.land/x/oak/mod.ts'
import beerController from './../controller/beerController.ts'

const router: Router = new Router()

router.get('/', beerController.index)
router.get('/:id', beerController.show)
router.post('/', beerController.store)
router.put('/:id', beerController.update)
router.delete('/:id', beerController.delete)

export { router }