// this file is for running the test locally if we dont have the docker file, we will provide the url for local environment

if (!process.env.POSTGRES_URI) {
  process.env.POSTGRES_URI = 'postgres://app:password@localhost:5432/db';
}
