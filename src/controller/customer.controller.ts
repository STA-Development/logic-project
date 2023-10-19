import fileUpload, {FileArray} from 'express-fileupload'
import {Request, Response} from 'express'
import CustomerInfoService from '../services/customer-info.service'
import {errors} from '../libs/consts/const'


class CustomerController {

  async uploadPhoto(req: Request, res: Response): Promise<unknown> {
    try {
      const originalName = req.file as unknown as fileUpload.FileArray;

      const name = await CustomerInfoService.savePhoto(originalName.filename)
      return res.json(name);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: errors.internalServer });
    }
  }
  async createCustomerInfo(req: Request, res: Response): Promise<unknown> {
    try {
      const customerService = CustomerInfoService.createCustomerInfo(req.body)

      return res.json(customerService)
    } catch (error) {
      return res.status(500).json({ error: errors.internalServer });
    }
  }
}

export default new CustomerController()
