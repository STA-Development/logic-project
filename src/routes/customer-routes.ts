import express from 'express'
import {uploadCoi} from '../libs/storage/coi.storage'
import CustomerController from '../controller/customer.controller'

export const router = express.Router()

router.post('/upload', uploadCoi.single('file'), CustomerController.createPhotos)
router.post('/company', CustomerController.createCustomerInfo)
