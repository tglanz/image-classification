# Image Classifier Backend

## The Project

This project is an [Express](https://expressjs.com/) application.

## API

`GET /api/status` Get the status.

`POST /api/classify/image` Upload an image and classify it

- Returns: The classification alongside 3 similar image. Similar images are images with the same class.

## Development

Install dependencies by running

    npm install

Build the `js` code into the `./dist` directory by running

    npm run build

Run the backend in development mode (with hot reloading)

    npm run dev

## Database Access

We use [Prisma](https://www.prisma.io/) as our ORM.

To perform migrations run

    npm run migrate

## Docker

Build the docker image with the name `backend` by running:

    docker build -t backend .

Run the backend using the docker image `backend`:

    docker run --rm --name backend backend

You can pass enviornment variable using the standard `-e NAME=VALUE` docker's syntax. For example, to run the server such that it will listen on port 5432:

    docker run --rm --name backend -e PORT=5432 backend backend
