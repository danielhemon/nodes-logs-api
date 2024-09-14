import { Router } from 'express'
import * as logsController from "../controllers/logs.controller.js";

const router = Router()

router.get('/', logsController.getAllLogs)

router.post('/', logsController.creatLog)

router.get('/type', logsController.getLogsByType)

router.get('/date', logsController.getLogsByDate)

router.get('/:id', logsController.getLogById)

router.delete('/:id', logsController.deleteLogById)




export default router;