import { Client } from "https://deno.land/x/postgres/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config()

const client = new Client({
  user: env.DB_USERNAME,
  database: env.DB_DATABASE,
  hostname: env.DB_HOSTNAME,
  port: parseInt(env.DB_PORT!),
  password: env.DB_PASSWORD,
});

export { client };