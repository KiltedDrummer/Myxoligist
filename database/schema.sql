-- Table: public.ingredients

-- DROP TABLE public.ingredients;

CREATE TABLE public.ingredients (
  id integer,
  name text COLLATE pg_catalog."default",
    type text COLLATE pg_catalog."default",
    sub_type text COLLATE pg_catalog."default"
)
  WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

  ALTER TABLE public.ingredients
    OWNER to postgres;

-- Table: public.recipes

-- DROP TABLE public.recipes;

CREATE TABLE public.recipes (
  id integer,
  name text COLLATE pg_catalog."default",
    ingredients_raw text[],
    difficulty integer,
    instructions text COLLATE pg_catalog."default",
    tags text[] COLLATE pg_catalog."default",
    ingredients_measured text[] COLLATE pg_catalog."default"
)
  WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

  ALTER TABLE public.recipes
    OWNER to postgres;

-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE public.users (
    id integer,
    name text COLLATE pg_catalog."default",
    ingredients integer[],
    recipes integer[],
    favorites integer[]
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;
