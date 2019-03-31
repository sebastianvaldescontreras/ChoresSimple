-- Database: ChoresDB

-- DROP DATABASE "ChoresDB";

CREATE DATABASE "ChoresDB"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Chile.1252'
    LC_CTYPE = 'Spanish_Chile.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE "ChoresDB"
    IS 'DataBase of Chores at Coopeuch';


-- Table: public.chores

-- DROP TABLE public.chores;

CREATE TABLE public.chores
(
    id integer NOT NULL DEFAULT nextval('id_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    description character varying(400) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT chores_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.chores
    OWNER to postgres;

COMMENT ON COLUMN public.chores.id
    IS 'id of table';