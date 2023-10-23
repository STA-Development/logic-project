import express from 'express'
import {uploadCoi} from '../libs/storage/pdf-files.storage'
import CustomerController from '../controller/customer.controller'

export const router = express.Router()

router.post('/upload', uploadCoi.single('file'), CustomerController.uploadPhoto)
router.post('/company', CustomerController.createCustomerInfo)
//router.post('/desiredLanes', CustomerController.desiredLanesCreate)