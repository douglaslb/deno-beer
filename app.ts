import { Application } from 'https://deno.land/x/oak/mod.ts'
import { router } from './router/routes.ts'
import {client} from './config/database.ts'

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())
await client.connect()

await app.listen({port: 3333})

await client.end()