-- ADD uuid 
create extension if not exists "uuid-ossp";
-- Drop table

-- DROP TABLE public.complex;

CREATE TABLE public.complex (
	id varchar(60) NOT NULL,
	complexname varchar NULL,
	CONSTRAINT complex_pk PRIMARY KEY (id)
);

-- Drop table

-- DROP TABLE public.home;

CREATE TABLE public.home (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	homenumber varchar NULL,
	phone varchar NULL,
	complexid varchar(60) NOT NULL,
	CONSTRAINT homes_pk PRIMARY KEY (id),
	CONSTRAINT homes_fk FOREIGN KEY (complexid) REFERENCES complex(id)
);


INSERT INTO public.complex
(id, "complexname")
VALUES('adxTkd', 'Residencial 01');

INSERT INTO public.complex
(id, "complexname")
VALUES('adkmmNt', 'Residencial 01');


INSERT INTO public.home
(homenumber, phone, complexid)
VALUES('201', '9999999', 'adkmmNt');

INSERT INTO public.home
(homenumber, phone, complexid)
VALUES('301', '9999999', 'adxTkd');

INSERT INTO public.home
(homenumber, phone, complexid)
VALUES('101', '9999999', 'adkmmNt');

INSERT INTO public.home
(homenumber, phone, complexid)
VALUES('3302', '9999999', 'adxTkd');