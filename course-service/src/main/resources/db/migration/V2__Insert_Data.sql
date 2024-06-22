INSERT INTO public.category(
	id, name, description, thumbnail_url, created_at, updated_at)
	VALUES (1, 'Category 1', 'Lorem ipsum dolor.', 'https://picsum.photos/400/400', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(2, 'Category 2', 'Lorem ipsum dolor.', 'https://picsum.photos/400/400', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3, 'Category 3', 'Lorem ipsum dolor.', 'https://picsum.photos/400/400', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(4, 'Category 4', 'Lorem ipsum dolor.', 'https://picsum.photos/400/400', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(5, 'Category 5', 'Lorem ipsum dolor.', 'https://picsum.photos/400/400', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public.course(
	id, category_id, mentor_id, title, description, thumbnail_url, video_url, price, average_rating, is_public, created_at, updated_at)
	VALUES (1, 1, 1, 'Course 1', 'Lorem ipsum dolor.', 'https://picsum.photos/400/400',
	'https://www.youtube.com/watch?v=jNQXAC9IVRw', 19.99, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(2, 2, 2, 'Course 2', 'Lorem ipsum dolor.', 'https://picsum.photos/400/400',
    'https://www.youtube.com/watch?v=jNQXAC9IVRw', 29.99, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 3, 3, 'Course 3', 'Lorem ipsum dolor.', 'https://picsum.photos/400/400',
    'https://www.youtube.com/watch?v=jNQXAC9IVRw', 39.99, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 4, 4, 'Course 4', 'Lorem ipsum dolor.', 'https://picsum.photos/400/400',
    'https://www.youtube.com/watch?v=jNQXAC9IVRw', 49.99, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 5, 5, 'Course 5', 'Lorem ipsum dolor.', 'https://picsum.photos/400/400',
    'https://www.youtube.com/watch?v=jNQXAC9IVRw', 59.99, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public.module(
	id, course_id, title, description, created_at, updated_at)
	VALUES (1, 1, 'Course 1 - Module 1', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(2, 1, 'Course 1 - Module 2', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(3, 2, 'Course 2 - Module 1', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(4, 2, 'Course 2 - Module 2', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(5, 3, 'Course 3 - Module 1', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(6, 3, 'Course 3 - Module 2', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(7, 4, 'Course 4 - Module 1', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(8, 4, 'Course 4 - Module 2', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(9, 5, 'Course 5 - Module 1', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(10, 5, 'Course 5 - Module 2', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public.lecture(
	id, module_id, title, description, attachment_url, is_public, created_at, updated_at)
	VALUES (1, 1, 'Course 1 - Module 1 - Lecture 1', 'Lorem ipsum dolor.',
	'https://www.youtube.com/watch?v=jNQXAC9IVRw', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(2, 2, 'Course 1 - Module 2 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/watch?v=jNQXAC9IVRw', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 3, 'Course 2 - Module 1 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/watch?v=jNQXAC9IVRw', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 4, 'Course 2 - Module 2 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/watch?v=jNQXAC9IVRw', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 5, 'Course 3 - Module 1 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/watch?v=jNQXAC9IVRw', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 6, 'Course 3 - Module 2 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/watch?v=jNQXAC9IVRw', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 7, 'Course 4 - Module 1 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/watch?v=jNQXAC9IVRw', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 8, 'Course 4 - Module 2 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/watch?v=jNQXAC9IVRw', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 9, 'Course 5 - Module 1 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/watch?v=jNQXAC9IVRw', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, 10, 'Course 5 - Module 2 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/watch?v=jNQXAC9IVRw', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);