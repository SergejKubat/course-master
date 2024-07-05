INSERT INTO public.category(
	id, name, description, thumbnail_url, created_at, updated_at)
	VALUES (DEFAULT, 'Category 1', 'Lorem ipsum dolor.', 'https://picsum.photos/320/240', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 'Category 2', 'Lorem ipsum dolor.', 'https://picsum.photos/320/240', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 'Category 3', 'Lorem ipsum dolor.', 'https://picsum.photos/320/240', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 'Category 4', 'Lorem ipsum dolor.', 'https://picsum.photos/320/240', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 'Category 5', 'Lorem ipsum dolor.', 'https://picsum.photos/320/240', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public.course(
	id, category_id, mentor_id, title, description, thumbnail_url, video_url, price, average_rating, is_public, created_at, updated_at)
	VALUES (DEFAULT, 1, 1, 'Course 1', 'Lorem ipsum dolor.', 'https://picsum.photos/320/240',
	'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', 19.99, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 2, 2, 'Course 2', 'Lorem ipsum dolor.', 'https://picsum.photos/320/240',
    'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', 29.99, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 3, 3, 'Course 3', 'Lorem ipsum dolor.', 'https://picsum.photos/320/240',
    'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', 39.99, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 4, 4, 'Course 4', 'Lorem ipsum dolor.', 'https://picsum.photos/320/240',
    'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', 49.99, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 5, 5, 'Course 5', 'Lorem ipsum dolor.', 'https://picsum.photos/320/240',
    'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', 59.99, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public.module(
	id, course_id, title, description, created_at, updated_at)
	VALUES (DEFAULT, 1, 'Course 1 - Module 1', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 1, 'Course 1 - Module 2', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 2, 'Course 2 - Module 1', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 2, 'Course 2 - Module 2', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 3, 'Course 3 - Module 1', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 3, 'Course 3 - Module 2', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 4, 'Course 4 - Module 1', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 4, 'Course 4 - Module 2', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 5, 'Course 5 - Module 1', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 5, 'Course 5 - Module 2', 'Lorem ipsum dolor.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public.lecture(
	id, module_id, title, description, attachment_url, is_public, created_at, updated_at)
	VALUES (DEFAULT, 1, 'Course 1 - Module 1 - Lecture 1', 'Lorem ipsum dolor.',
	'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(DEFAULT, 2, 'Course 1 - Module 2 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 3, 'Course 2 - Module 1 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 4, 'Course 2 - Module 2 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 5, 'Course 3 - Module 1 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 6, 'Course 3 - Module 2 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 7, 'Course 4 - Module 1 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 8, 'Course 4 - Module 2 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 9, 'Course 5 - Module 1 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (DEFAULT, 10, 'Course 5 - Module 2 - Lecture 1', 'Lorem ipsum dolor.',
    	'https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);