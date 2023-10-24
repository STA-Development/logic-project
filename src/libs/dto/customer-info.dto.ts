import {IsDate, IsNumber, IsString} from 'class-validator'
import {DesiredLanes} from '../entities/desired-lanes'

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

  @IsString()
  payment: string

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

  desiredLanes : DesiredLanes[]
}


export class DesiredLanesDto {
  @IsString()
  fromCity:string

  @IsString()
  toCity: string
}
