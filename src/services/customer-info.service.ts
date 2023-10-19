import {Repository} from 'typeorm'
import {CustomerInfo} from '../libs/db/entities/company'
import {CustomerInfoDto} from '../libs/dto/customer-info.dto'
import {dbmsMysql} from '../libs/db/db'

class CustomerInfoService {
  private readonly customerRepository: Repository<CustomerInfo>
  constructor() {
    this.customerRepository = dbmsMysql.getRepository(CustomerInfo)
  }

  async createCustomerInfo(customerInfoDTO: CustomerInfoDto): Promise<void> {
    console.log({customerInfoDTO})
    await this.customerRepository.insert(customerInfoDTO)
  }
}
export default new CustomerInfoService()
