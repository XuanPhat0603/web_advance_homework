import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getActor = async (req, res) => {
	const list = await prisma.actor.findMany();
	res.json({
		ok: true,
		data: list,
	});
};

export const postActor = async (req, res) => {
	const actor = await prisma.actor.create({
		data: {
			first_name: req.body.first_name,
			last_name: req.body.last_name,
		},
	});
	res.json(actor);
};
