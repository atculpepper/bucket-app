
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--THIS IS ALL WRONG
--TODO: FIX IT


CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
    "fave_quote" varchar
    (255),
  "profile_image",
  "location" varchar
    (255)
);

    CREATE TABLE "experiences"
    (
        "id" int PRIMARY KEY,
        "description" varchar(255),

    );



    CREATE TABLE "photos"
    (
        "id" int PRIMARY KEY,
        "experience_photo" varchar(255),
    );

    CREATE TABLE "search"
    (
        "id" int PRIMARY KEY,
        "search_terms" varchar(255),
        "search_location" varchar(255)
    );

    CREATE TABLE "user_experiences"
    (
        "id" SERIAL PRIMARY KEY,
        "user_id" INT REFERENCES "user" NOT NULL,
        "experience_id" INT REFERENCES "experiences" NOT NULL,
        "completed" BOOLEAN,
        "location" VARCHAR
    );
