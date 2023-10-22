import fileUpload from 'express-fileupload'
import {Request, Response} from 'express'
import CustomerInfoService from '../services/customer-info.service'
import {errors} from '../libs/consts/const'
import DesiredLinesService from '../services/desired-lanes.service'

class CustomerController {

  async uploadPhoto(req: Request, res: Response): Promise<unknown> {
    try {
      const originalName = req.file as unknown as fileUpload.FileArray;

      const name = await CustomerInfoService.savePhoto(originalName.filename)
      return res.json(name);
    } catch (error) {
      return res.status(500).json({ error: errors.internalServer });
    }
  }
  async createCustomerInfo(req: Request, res: Response): Promise<unknown> {
    try {
      const customerService = await CustomerInfoService.createCustomerInfo(req.body)
      return res.json({customerService})
    } catch (error) {
      return res.status(500).json({ error: errors.internalServer });
    }
  }

  async desiredLanesCreate(req:Request,res:Response): Promise<unknown> {
    try {
    const desiredLineService = await DesiredLinesService.createDesiredLanes(req.body)
    return res.json({desiredLineService})
  } catch(error) {
      return res.status(500).json({ error: errors.internalServer });
    }
  }
}

export default new CustomerController()
