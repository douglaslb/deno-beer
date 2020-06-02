CREATE TABLE "beers" (
  "id" serial NOT NULL,
  "name" character varying(255) NULL,
  "price" character varying(255) NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz NULL DEFAULT CURRENT_TIMESTAMP
);