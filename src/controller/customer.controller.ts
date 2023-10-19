import fileUpload from 'express-fileupload'
import {Request, Response} from 'express'
import CustomerInfoService from '../services/customer-info.service'

class CustomerController {
  async createPhotos(req: Request, res: Response): Promise<unknown> {
    try {
      console.log(23242323)
      const originalName = req.file as unknown as fileUpload.FileArray

      return res.json(originalName.filename)
    } catch (error) {
      console.log(error)
    }
  }

  async createCustomerInfo(req: Request, res: Response): Promise<unknown> {
    try {
      console.log(3333, req.body, 242)
      const customerService = CustomerInfoService.createCustomerInfo(req.body)

      return res.json(customerService)
    } catch (error) {
      console.log(error)
    }
  }
}

export default new CustomerController()
