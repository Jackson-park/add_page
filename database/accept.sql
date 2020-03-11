CREATE TABLE ACCEPT (
u_id BIGINT NOT NULL,
req_id BIGINT NOT NULL,
accept_date DATETIME NOT NULL,
is_cancel BOOLEAN NOT NULL,
FOREIGN KEY(u_id) REFERENCES USER(u_id),
FOREIGN KEY(req_id) REFERENCES REQUEST(req_id)
);