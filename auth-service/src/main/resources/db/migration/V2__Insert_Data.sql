INSERT INTO public.role(
	id, name)
	VALUES (DEFAULT, 'student'),
	(DEFAULT, 'mentor');

INSERT INTO public.account(
	id, username, email, first_name, last_name, occupation, description, avatar, password, created_at, updated_at)
	VALUES (DEFAULT, 'john.doe', 'john.doe@test.com', 'John', 'Doe', 'Software Engineer', 'Etiam non elit sed metus imperdiet gravida non auctor justo. Etiam feugiat fringilla nunc, quis porttitor lorem ultricies id. Nunc porttitor nisl ac vehicula volutpat. Nulla nisi justo, consequat sollicitudin augue dignissim, iaculis venenatis elit. Nunc porttitor, tortor eget imperdiet vulputate, diam purus posuere risus, a mollis lorem nunc vitae magna.', 'https://robohash.org/NLF.png',
	'$2a$10$gAJF4asFpYRx5VFhq0YAkOAvPo8fF1/XwN3gAkhaVaqwq6qYfDaby', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 'gerald.burton', 'gerald.burton@test.com', 'Gerald', 'Burton', 'Designer', 'nteger auctor enim blandit mauris varius, vitae ornare lacus consequat. Donec nec urna sed neque molestie hendrerit. In hac habitasse platea dictumst. Etiam rhoncus et ipsum ac gravida. Mauris tempor quam id erat rhoncus, sit amet aliquam ipsum consequat. Nunc nulla odio, volutpat sit amet metus non, malesuada accumsan dolor.', 'https://robohash.org/R92.png',
    	'$2a$10$gAJF4asFpYRx5VFhq0YAkOAvPo8fF1/XwN3gAkhaVaqwq6qYfDaby', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 'andrew.terry', 'andrew.terry@test.com', 'Andrew', 'Terry', 'Businessman', 'Mauris suscipit, urna quis tempor euismod, dolor enim porttitor turpis, a tincidunt odio nulla sed leo. Aenean iaculis mattis risus eu congue. Suspendisse potenti. Donec et imperdiet metus. Cras cursus ullamcorper lectus, eu hendrerit est tempus eget. Integer pulvinar felis sit amet mauris pulvinar, eu consectetur nulla interdum. Sed posuere lectus at sem molestie, rutrum elementum arcu tempor. Maecenas dapibus volutpat aliquam.', 'https://robohash.org/QPB.png',
    	'$2a$10$gAJF4asFpYRx5VFhq0YAkOAvPo8fF1/XwN3gAkhaVaqwq6qYfDaby', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 'bjorn.crane', 'bjorn.crane@test.com', 'Bjorn', 'Crane', 'Life Coach', 'Vestibulum dui turpis, dignissim a porta vitae, viverra non eros. Proin eleifend sodales velit, ut cursus arcu porttitor ut. Quisque purus erat, aliquet sit amet eros quis, gravida commodo ipsum. Nullam hendrerit tellus at lobortis euismod. Integer facilisis in leo convallis venenatis. ', 'https://robohash.org/0HJ.png',
    	'$2a$10$gAJF4asFpYRx5VFhq0YAkOAvPo8fF1/XwN3gAkhaVaqwq6qYfDaby', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 'hamza.soto', 'hamza.soto@test.com', 'Hamza', 'Soto', 'Scientist', 'In magna magna, dapibus sed purus ac, pharetra fringilla velit. Sed pharetra quam quam, et pellentesque nulla convallis et. Suspendisse potenti. Suspendisse auctor elit eros, sed consequat dolor suscipit sit amet. Donec lectus dui, vulputate sit amet facilisis vitae, sodales id dui. Nulla id nisi lobortis, tempus lacus a, facilisis nibh.', 'https://robohash.org/6S4.png',
    	'$2a$10$gAJF4asFpYRx5VFhq0YAkOAvPo8fF1/XwN3gAkhaVaqwq6qYfDaby', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 'jayson.lim', 'jayson.lim@test.com', 'Jayson', 'Lim', '', '', 'https://robohash.org/HMN.png',
        '$2a$10$gAJF4asFpYRx5VFhq0YAkOAvPo8fF1/XwN3gAkhaVaqwq6qYfDaby', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 'mila.fuentes', 'mila.fuentes@test.com', 'Mila', 'Fuentes', '', '', 'https://robohash.org/PPZ.png',
        '$2a$10$gAJF4asFpYRx5VFhq0YAkOAvPo8fF1/XwN3gAkhaVaqwq6qYfDaby', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 'elaina.brock', 'elaina.brock@test.com', 'Elaina', 'Brock', '', '', 'https://robohash.org/Q3J.png',
        '$2a$10$gAJF4asFpYRx5VFhq0YAkOAvPo8fF1/XwN3gAkhaVaqwq6qYfDaby', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public.account_role(
	account_id, role_id)
	VALUES (1, 1),
	(1, 2),
	(2, 1),
	(2, 2),
	(3, 1),
	(3, 2),
	(4, 1),
	(4, 2),
	(5, 1),
	(5, 2),
	(6, 1),
	(7, 1),
    (8, 1);