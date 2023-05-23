# Deploy

## Compose

Our compose file consists of 3 servies:

- **storage**. A postgresql database instance.
- **storage_init**. An init container that initializes the database.
- **backend**. Our backend which listens on port 5000.

The **backend** waits for the **storage_init** to finish before it starts.

> Note: Passwords and URLs are plaintext.
> Note: The database is not exposed. Only the backend has access to it.

Before you start the services make sure you have a local image named `backend`. If you don't, refer to the readme at the `backend`.

Start the services by running

    docker-compose up

Make sure the backend is up by running

    curl -XGET localhost:5000/api/status
