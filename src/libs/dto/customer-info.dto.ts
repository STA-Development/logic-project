import {IsDate, IsEnum, IsNumber, IsString} from 'class-validator'
import {Payment} from '../enums/payment'

export class CustomerInfoDto {
  @IsString()
  companyName: string

  @IsNumber()
  mc: number

  @IsString()
  address: string

  @IsString()
  city: string

  @IsString()
  state: string

  @IsNumber()
  zip: number

  @IsString()
  primaryPh: string

  @IsNumber()
  ext: number

  @IsString()
  secondaryPh: string

  @IsString()
  generalContact: string

  @IsNumber()
  cell: number

  @IsString()
  legalName: string

  @IsString()
  dbaName: string

  @IsNumber()
  fid: number

  @IsString()
  w9File: string

  @IsString()
  insuranceCompanyName: string

  @IsNumber()
  liabilityCoverage: number

  @IsNumber()
  cargoCoverage: number

  @IsDate()
  liabilityExpDate: Date

  @IsDate()
  cargoExpDate: Date

  @IsString()
  coiFile: string

  @IsEnum(Payment)
  payment: Payment

  @IsString()
  payToCompanyName?: string

  @IsString()
  payToCompanyAddress?: string

  @IsString()
  paymentCity?: string

  @IsString()
  paymentState?: string

  @IsString()
  paymentZip?: string

  @IsNumber()
  routingNumber?: number

  @IsNumber()
  accountNumber?: number

  @IsString()
  noaFile?: string

  @IsString()
  directPaymentFile?: string

  @IsString()
  type: string

  @IsString()
  type2: string

  @IsString()
  type3: string

  @IsNumber()
  quantity: number

  @IsNumber()
  quantity2: number

  @IsNumber()
  quantity3: number

  @IsNumber()
  powerOfUnits: number

  @IsString()
  additionalNote?: string

  @IsString()
  fromCity1: string

  @IsString()
  fromCity2: string

  @IsString()
  fromCity3: string

  @IsString()
  fromCity4: string

  @IsString()
  fromCity5: string

  @IsString()
  toCity1: string

  @IsString()
  toCity2: string

  @IsString()
  toCity3: string

  @IsString()
  toCity4: string

  @IsString()
  toCity5: string
}
