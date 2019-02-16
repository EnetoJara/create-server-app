import { Router } from "express";

import { HelloWorld } from "../constrollers/indexController";
const api = new Router();

api.get("/", HelloWorld);

export default api;
