INSERT INTO public.role(
	id, name)
	VALUES (1, 'student'),
	(2, 'mentor');

INSERT INTO public.account(
	id, username, email, first_name, last_name, occupation, description, avatar, password, created_at, updated_at)
	VALUES (1, 'john.doe', 'john.doe@test.com', 'John', 'Doe', '', '', 'https://robohash.org/NLF.png',
	'$2a$10$ygZXr22tjap9RVUIFXGxUOSQo70Jgh3Hy3L4DgODiRqZC4aNQk0tO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(2, 'gerald.burton', 'gerald.burton@test.com', 'Gerald', 'Burton', '', '', 'https://robohash.org/R92.png',
    	'$2a$10$ygZXr22tjap9RVUIFXGxUOSQo70Jgh3Hy3L4DgODiRqZC4aNQk0tO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'andrew.terry', 'andrew.terry@test.com', 'Andrew', 'Terry', '', '', 'https://robohash.org/QPB.png',
    	'$2a$10$ygZXr22tjap9RVUIFXGxUOSQo70Jgh3Hy3L4DgODiRqZC4aNQk0tO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'bjorn.crane', 'bjorn.crane@test.com', 'Bjorn', 'Crane', '', '', 'https://robohash.org/0HJ.png',
    	'$2a$10$ygZXr22tjap9RVUIFXGxUOSQo70Jgh3Hy3L4DgODiRqZC4aNQk0tO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'hamza.soto', 'hamza.soto@test.com', 'Hamza', 'Soto', '', '', 'https://robohash.org/6S4.png',
    	'$2a$10$ygZXr22tjap9RVUIFXGxUOSQo70Jgh3Hy3L4DgODiRqZC4aNQk0tO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'jayson.lim', 'jayson.lim@test.com', 'Jayson', 'Lim', 'Software Engineer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet mi et tristique ultrices. Aliquam quis congue elit. Pellentesque quis tincidunt nunc. Mauris porttitor orci metus, quis rhoncus erat tempus sed. Morbi tristique erat posuere lectus pharetra, non fringilla elit sagittis. Nulla mattis eu metus id convallis. Maecenas pharetra mi vitae urna lacinia suscipit. Donec luctus non dui a eleifend.', 'https://robohash.org/4U6.png',
        '$2a$10$ygZXr22tjap9RVUIFXGxUOSQo70Jgh3Hy3L4DgODiRqZC4aNQk0tO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'mila.fuentes', 'mila.fuentes@test.com', 'Mila', 'Fuentes', 'Business Analyst', 'Mauris porttitor massa libero. Cras feugiat eleifend lacus et accumsan. Fusce fermentum sodales sapien. In et ex dictum, placerat magna maximus, ultricies leo. Donec porta sodales nibh, et ullamcorper dui iaculis et. Duis vehicula lacus sed libero molestie, vitae maximus leo hendrerit. Aliquam erat volutpat. ', 'https://robohash.org/PPZ.png',
        '$2a$10$ygZXr22tjap9RVUIFXGxUOSQo70Jgh3Hy3L4DgODiRqZC4aNQk0tO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'elaina.brock', 'elaina.brock@test.com', 'Elaina', 'Brock', 'Database Administrator', 'Maecenas vitae blandit leo. Praesent ut velit ac nisl interdum tincidunt. Vestibulum at mattis nunc. Aenean aliquet eu diam et molestie. Donec vehicula, enim sit amet sollicitudin euismod, tortor ex lobortis ligula, sit amet vehicula ipsum turpis quis arcu. Suspendisse leo ex, dignissim sit amet nisl quis, vulputate auctor sem. Ut neque urna, consectetur sed efficitur id, rhoncus vel nibh.', 'https://robohash.org/Q3J.png',
        '$2a$10$ygZXr22tjap9RVUIFXGxUOSQo70Jgh3Hy3L4DgODiRqZC4aNQk0tO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public.account_role(
	account_id, role_id)
	VALUES (1, 1),
	(2, 1),
	(3, 1),
	(4, 1),
	(5, 1),
	(6, 1),
	(6, 2),
	(7, 1),
    (7, 2),
    (8, 1),
    (8, 2);