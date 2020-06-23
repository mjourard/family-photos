CREATE TABLE photo (
    photo_id serial PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    dt_added TIMESTAMPTZ NOT NULL,
    dt_mod TIMESTAMPTZ NOT NULL,
    object_storage_id INTEGER NOT NULL,
    album_id INTEGER NOT NULL
);

CREATE TYPE object_storage_type as ENUM('file', 's3');
CREATE TABLE object_storage (
    object_storage_id SERIAL PRIMARY KEY,
    type object_storage_type NOT NULL,
    json_storage_data JSON NOT NULL
);

CREATE TABLE tag (
    tag_id SERIAL PRIMARY KEY,
    photo_id INTEGER NOT NULL,
    value TEXT NOT NULL
);

CREATE TABLE album (
    album_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE account(
	user_id serial PRIMARY KEY,
	username VARCHAR (50) UNIQUE NOT NULL,
	password VARCHAR (100) NOT NULL,
	email VARCHAR (355) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
	last_login TIMESTAMP
);