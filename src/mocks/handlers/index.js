import { rest } from 'msw';
import { students } from '../../mocks/data/students';
import { groups } from '../../mocks/data/groups';

export const handlers = [
	rest.get('/groups', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ groups }));
	}),

	rest.post('/users/search', (req, res, ctx) => {
		const matchingStudents = req.body.searchPhrase
			? students.filter((student) =>
					student.name
						.toLowerCase()
						.includes(req.body.searchPhrase.toLowerCase())
			  )
			: [];
		return res(ctx.status(200), ctx.json({ students: matchingStudents }));
	}),

	rest.get('/users/:group', (req, res, ctx) => {
		if (req.params.group) {
			const matchingStudents = students.filter(
				(student) => student.group === req.params.group
			);
			return res(ctx.status(200), ctx.json({ students: matchingStudents }));
		} else {
			return res(ctx.status(200), ctx.json({ students }));
		}
	}),

	rest.get('/dashboard/users/:id', (req, res, ctx) => {
		if (req.params.id) {
			const matchingStudent = students.find(
				(student) => student.id === req.params.id
			);
			if (!matchingStudent) {
				return res(ctx.status(404), ctx.json({ error: 'not found' }));
			}
			return res(ctx.status(200), ctx.json({ students: matchingStudent }));
		} else {
			return res(ctx.status(200), ctx.json({ students }));
		}
	}),
];
