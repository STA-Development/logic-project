import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';
import { CustomerInfo } from './customer-info';
import { JoinColumn } from 'typeorm';

@Entity('desired_lanes')
export class DesiredLanes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar'})
  @IsString()
  fromCity: string;

  @Column({ type: 'varchar' })
  @IsString()
  toCity: string;

  @Column({ type: 'varchar' })
  @IsString()
  customerInfoId: number;

  @ManyToOne(() => CustomerInfo, (customerInfo) => customerInfo.desiredLanes )
  @JoinColumn({ name: 'customerInfoId' })
  customerInfo: CustomerInfo;
}