import fileUpload from 'express-fileupload'
import {Request, Response} from 'express'
import CustomerInfoService from '../services/customer-info.service'
import {errors} from '../libs/consts/const'
import DesiredLanesService from '../services/desired-lanes.service'

class CustomerController {

  async uploadPhoto(req: Request, res: Response): Promise<unknown> {
    try {
      const originalName = req.file as unknown as fileUpload.FileArray;

      const name = await CustomerInfoService.savePhoto(originalName.filename)
      return res.json(name);
    } catch (error) {
      console.log(error);
      return res.status(500).json({error: errors.internalServer});
    }
  }


  async createCustomerInfo(req: Request, res: Response): Promise<unknown> {
    try {
      const customerInfoId = await CustomerInfoService.createCustomerInfo(req.body.customerInfo);
      const desiredLanes = await DesiredLanesService.createDesiredLanes(customerInfoId, req.body.desiredLanes)
      return res.json({desiredLanes})
    } catch (error) {
      console.log(error);
      return res.status(500).json({error: errors.internalServer});
    }
  }
}

export default new CustomerController()
