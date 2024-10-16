import express from "express"
import protectRoute from "../middleware/protectRoute.js";
import { getUsersforsidebar } from "../controllers/user.controller.js";
const router = express.Router();

router.get('/',protectRoute,getUsersforsidebar)

export default router