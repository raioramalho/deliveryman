-- CreateTable
CREATE TABLE "deliveries" (
    "id" SERIAL NOT NULL,
    "id_client" INTEGER NOT NULL,
    "id_delivery" INTEGER NOT NULL,
    "item_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "end_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "deliveries_pkey" PRIMARY KEY ("id")
);
