CREATE TABLE products
(
    id integer NOT NULL,
    prodCode text  NOT NULL,
    barcode text  NOT NULL,
    nameEN text  NOT NULL,
    nameTH text  NOT NULL,
    stockAmt text  NOT NULL,
    weight text  NOT NULL,
    payType text  NOT NULL,
    prodType text  NOT NULL,
    pic text  NOT NULL,
    tag text  NOT NULL,
    prodDesc text  NOT NULL,
    unitcount text  NOT NULL,
    CONSTRAINT products_pkey PRIMARY KEY (id)
)