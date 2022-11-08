import { createLogger, format, transports } from 'winston';
import { WinstonPrismaTransporter } from './prisma.transporter.js';

const { combine, timestamp, printf } = format;

const logFormat = printf(({ level, message, timestamp }) => {
	return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
	level: 'info',
	format: combine(
		timestamp({
			format: 'YYYY-MM-DD HH:mm:ss',
		}),
		logFormat
	),
	defaultMeta: { service: 'user-service' },
	transports: [
		new transports.File({
			filename: './logs/error.log',
			level: 'error',
		}),
		new transports.File({ filename: './logs/combined.log' }),
		new WinstonPrismaTransporter({
			model: `logger`,
		}),
	],
});

export default logger;
