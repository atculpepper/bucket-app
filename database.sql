
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
    "fave_quote" varchar
    (255),
  "profile_image" DEFAULT,
  "location" varchar
    (255)
);

    CREATE TABLE "bucket_experiences"
    (
        "id" int PRIMARY KEY,
        "user_id" int,
        "description" varchar(255),
        "location" varchar(255),
        "complete" boolean
    );

    CREATE TABLE "bucket_category"
    (
        "id" int PRIMARY KEY,
        "experiences_id" int,
        "name" varchar(255)
    );

    CREATE TABLE "bucket_experience_photos"
    (
        "id" int PRIMARY KEY,
        "experience_id" int,
        "experience_photo" varchar(255),
        "experience_location" varchar(255)
    );

    CREATE TABLE "bucket_experience_search"
    (
        "id" int PRIMARY KEY,
        "experience_id" int,
        "search_terms" varchar(255),
        "search_location" varchar(255)
    );
