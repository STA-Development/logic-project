import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {IsDate, IsNumber, IsString} from 'class-validator'
import {DesiredLanes} from './desired-lanes'

@Entity('customer_info')
export class CustomerInfo {
  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'varchar'})
  @IsString()
  companyName: string

  @Column({type: 'int'})
  @IsNumber()
  mc: number

  @Column({type: 'varchar'})
  @IsString()
  address: string

  @Column({type: 'varchar'})
  @IsString()
  city: string

  @Column({type: 'varchar'})
  @IsString()
  state: string

  @Column({type: 'varchar'})
  @IsString()
  zip: number

  @Column({type: 'varchar'})
  @IsString()
  primaryPh: string

  @Column({type: 'int'})
  @IsNumber()
  ext: number

  @Column({type: 'varchar'})
  @IsString()
  secondaryPh: string

  @Column({type: 'varchar'})
  @IsString()
  generalContact: string

  @Column({type: 'int'})
  @IsNumber()
  cell: number

  @Column({type: 'varchar'})
  @IsString()
  legalName: string

  @Column({type: 'varchar'})
  @IsString()
  dbaName: string

  @Column({type: 'int'})
  @IsNumber()
  fid: number

  @Column({type: 'varchar'})
  @IsString()
  w9File: string

  @Column({type: 'varchar'})
  @IsString()
  insuranceCompanyName: string

  @Column({type: 'varchar'})
  @IsString()
  liabilityCoverage: number

  @Column({type: 'varchar'})
  @IsString()
  cargoCoverage: number

  @Column({type: 'date'})
  @IsDate()
  liabilityExpDate: Date

  @Column({type: 'date'})
  @IsDate()
  cargoExpDate: Date

  @Column({type: 'varchar'})
  @IsString()
  coiFile: string

  @Column({type: 'varchar'})
  @IsString()
  payment: string

  @Column({type: 'varchar', nullable: true})
  @IsString()
  payToCompanyName?: string

  @Column({type: 'varchar', nullable: true})
  @IsString()
  payToCompanyAddress?: string

  @Column({type: 'varchar', nullable: true})
  @IsString()
  paymentCity?: string

  @Column({type: 'varchar', nullable: true})
  @IsString()
  paymentState?: string

  @Column({type: 'varchar', nullable: true})
  @IsString()
  paymentZip?: string

  @Column({type: 'varchar', nullable: true})
  @IsString()
  routingNumber?: number

  @Column({type: 'varchar', nullable: true})
  @IsString()
  accountNumber?: number

  @Column({type: 'varchar', nullable: true})
  @IsString()
  noaFile?: string

  @Column({type: 'varchar', nullable: true})
  @IsString()
  directPaymentFile?: string

  @Column({type: 'varchar'})
  @IsString()
  type: string

  @Column({type: 'varchar'})
  @IsString()
  type2: string

  @Column({type: 'varchar'})
  @IsString()
  type3: string

  @Column({type: 'int'})
  @IsNumber()
  quantity: number

  @Column({type: 'int'})
  @IsNumber()
  quantity2: number

  @Column({type: 'int'})
  @IsNumber()
  quantity3: number

  @Column({type: 'int'})
  @IsString()
  powerOfUnits: number

  @Column({type: 'varchar', length: 512, nullable: true})
  @IsString()
  additionalNote?: string

  @OneToMany(() => DesiredLanes, (desiredLanes) => desiredLanes.customerInfo )
  desiredLanes : DesiredLanes[]
}