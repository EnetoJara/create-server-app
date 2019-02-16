import { Router } from "express";

import { create } from "../constrollers/user.controller";

const api = new Router();

api.post("/create", create);

export default api;
