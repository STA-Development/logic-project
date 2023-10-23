import {Repository} from 'typeorm'
import {CustomerInfo} from '../libs/entities/customer-info'
import {CustomerInfoDto} from '../libs/dto/customer-info.dto'
import {dbmsMysql} from '../libs/db/db'
import fileUpload from 'express-fileupload'

class CustomerInfoService {
  private readonly customerInfoRepository: Repository<CustomerInfo>
  constructor() {
    this.customerInfoRepository = dbmsMysql.getRepository(CustomerInfo)
  }
  async savePhoto(file?: fileUpload.UploadedFile | fileUpload.UploadedFile[]): Promise<unknown> {
      return file
  }

  async createCustomerInfo(customerInfoDTO: CustomerInfoDto): Promise<number> {
    const customerInfo = new CustomerInfo();
    customerInfo.companyName = customerInfoDTO.companyName;
    customerInfo.mc = customerInfoDTO.mc;
    customerInfo.address = customerInfoDTO.address;
    customerInfo.city = customerInfoDTO.city;
    customerInfo.state = customerInfoDTO.state;
    customerInfo.zip = customerInfoDTO.zip;
    customerInfo.primaryPh = customerInfoDTO.primaryPh;
    customerInfo.ext = customerInfoDTO.ext;
    customerInfo.secondaryPh = customerInfoDTO.secondaryPh;
    customerInfo.generalContact = customerInfoDTO.generalContact;
    customerInfo.cell = customerInfoDTO.cell;
    customerInfo.legalName = customerInfoDTO.legalName;
    customerInfo.dbaName = customerInfoDTO.dbaName;
    customerInfo.fid = customerInfoDTO.fid;
    customerInfo.w9File = customerInfoDTO.w9File;
    customerInfo.insuranceCompanyName = customerInfoDTO.insuranceCompanyName;
    customerInfo.liabilityCoverage = customerInfoDTO.liabilityCoverage;
    customerInfo.cargoCoverage = customerInfoDTO.cargoCoverage;
    customerInfo.liabilityExpDate = customerInfoDTO.liabilityExpDate;
    customerInfo.cargoExpDate = customerInfoDTO.cargoExpDate;
    customerInfo.coiFile = customerInfoDTO.coiFile;
    customerInfo.payment = customerInfoDTO.payment;
    customerInfo.payToCompanyName = customerInfoDTO.payToCompanyName;
    customerInfo.payToCompanyAddress = customerInfoDTO.payToCompanyAddress;
    customerInfo.paymentCity = customerInfoDTO.paymentCity;
    customerInfo.paymentState = customerInfoDTO.paymentState;
    customerInfo.paymentZip = customerInfoDTO.paymentZip;
    customerInfo.routingNumber = customerInfoDTO.routingNumber;
    customerInfo.accountNumber = customerInfoDTO.accountNumber;
    customerInfo.noaFile = customerInfoDTO.noaFile;
    customerInfo.directPaymentFile = customerInfoDTO.directPaymentFile;
    customerInfo.type = customerInfoDTO.type;
    customerInfo.type2 = customerInfoDTO.type2;
    customerInfo.type3 = customerInfoDTO.type3;
    customerInfo.quantity = customerInfoDTO.quantity;
    customerInfo.quantity2 = customerInfoDTO.quantity2;
    customerInfo.quantity3 = customerInfoDTO.quantity3;
    customerInfo.powerOfUnits = customerInfoDTO.powerOfUnits;
    customerInfo.additionalNote = customerInfoDTO.additionalNote;

    await this.customerInfoRepository.save(customerInfo);
    return customerInfo.id
  }


  async getAllCustomerInfo() : Promise<CustomerInfo[]>{
   return await this.customerInfoRepository.find({relations:{desiredLanes : true}})
  }
  async getCustomerInfoById(id : number) : Promise<CustomerInfo | null>{
    return await this.customerInfoRepository.findOne({where: {id}, relations:{desiredLanes : true}})
  }
}
export default new CustomerInfoService()
