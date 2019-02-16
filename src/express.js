import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

import indexRoutes from "./routes/indexRoutes";

export default function () {
	const app = new express();
	app.use(compress());
	app.use(helmet());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true, }));
	app.use(cookieParser());
	app.use(cors());

	app.use(indexRoutes);

	return app;
}
