DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS sightings CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE sightings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    picture BLOB NOT NULL,
    is_alive boolean NOT NULL,
    mortality_type TEXT,
    additional_notes TEXT
);

INSERT INTO users (
    name,
    email,
    password
) VALUES (
    'Frank Ozzy',
    'frank@example.com',
    'snake'
);