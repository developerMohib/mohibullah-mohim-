import express from 'express';
import { sendMail } from '../controller/sendmail';
const router = express.Router();
router.post('/sendMail', sendMail);
export const routes = router;
