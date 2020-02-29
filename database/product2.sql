CREATE TABLE PRODUCT (
u_id BIGINT NOT NULL,
req_id BIGINT NOT NULL,
prod_name VARCHAR(20) NOT NULL,
prod_num VARCHAR(20) NOT NULL,
prod_price VARCHAR(20) NOT NULL,
prod_fragile BOOLEAN NOT NULL,
prod_discription TEXT NOT NULL,
prod_size VARCHAR(20) NOT NULL,
prod_ref VARCHAR(20) NOT NULL,
prod_requirement VARCHAR(20) NOT NULL,
is_cancel BOOLEAN NOT NULL,
FOREIGN KEY(u_id) REFERENCES USER(u_id),
FOREIGN KEY(req_id) REFERENCES REQUEST(req_id)
) DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI;