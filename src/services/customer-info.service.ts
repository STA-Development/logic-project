import {InsertResult, Repository} from 'typeorm'
import {CustomerInfo} from '../libs/db/entities/customer-info'
import {CustomerInfoDto} from '../libs/dto/customer-info.dto'
import {dbmsMysql} from '../libs/db/db'
import fileUpload from 'express-fileupload'

class CustomerInfoService {
  private readonly customerRepository: Repository<CustomerInfo>
  constructor() {
    this.customerRepository = dbmsMysql.getRepository(CustomerInfo)
  }
  async savePhoto(file?: fileUpload.UploadedFile | fileUpload.UploadedFile[]): Promise<unknown> {
      return file
  }

  async createCustomerInfo(customerInfoDTO: CustomerInfoDto): Promise<InsertResult> {
    return await this.customerRepository.insert(customerInfoDTO)
  }
}
export default new CustomerInfoService()
