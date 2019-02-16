import { Router } from "express";
import { signin } from "../constrollers/auth.controller";

const api = new Router();

api.post("/signin", signin);

export default api;
