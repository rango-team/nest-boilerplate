-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('M', 'F', 'O');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "authenticationId" UUID,
    "name" VARCHAR(200) NOT NULL,
    "cell" TEXT,
    "register" TEXT,
    "gender" "Gender" NOT NULL,
    "birth" DATE,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_authenticationId_key" ON "User"("authenticationId");

-- CreateIndex
CREATE UNIQUE INDEX "User_cell_key" ON "User"("cell");

-- CreateIndex
CREATE UNIQUE INDEX "User_register_key" ON "User"("register");
