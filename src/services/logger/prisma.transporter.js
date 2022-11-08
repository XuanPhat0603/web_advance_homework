import Transport from 'winston-transport';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class WinstonPrismaTransporter extends Transport {
	constructor(opts) {
		super(opts);

		this.name = 'winston-prisma-transporter';
		this.level = opts.level || 'info';
		this.model = opts.model;
	}

	log(info, callback) {
		setImmediate(async () => {
			this.emit('logged', info);
			// console.log(info);
			const logger = await prisma[this.model].create({
				data: {
					level: info.level,
					message: info.message,
					// timestamp: info.timestamp,
				},
			});
		});

		// Perform the writing to the remote service
		callback();
	}
}
