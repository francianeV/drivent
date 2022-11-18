import { Router } from "express";
import { authenticateToken } from "@/middlewares";

const ticketsRouter = Router();

ticketsRouter
//.all("/*", authenticateToken)
  .get("/types", () => console.log("types"))
  .get("/", () => console.log("get tickets"))
  .post("/", () => console.log("post tickets"));

export { ticketsRouter };
