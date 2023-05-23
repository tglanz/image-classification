-- CreateTable
CREATE TABLE "images" (
    "id" SERIAL NOT NULL,
    "classification" INTEGER NOT NULL,
    "data" BYTEA NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);
