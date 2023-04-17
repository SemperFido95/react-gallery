CREATE TABLE galleryItems (
	id SERIAL PRIMARY KEY,
	path VARCHAR NOT NULL,
	description VARCHAR NOT NULL,
	likes INTEGER DEFAULT 0
);

INSERT INTO galleryItems (path, description)
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
('images/monkey.jpeg', 'Photo of a monkey with a big grin.');