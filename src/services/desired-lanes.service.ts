import { InsertResult, Repository} from 'typeorm'
import {DesiredLanesDto} from '../libs/dto/customer-info.dto'
import {dbmsMysql} from '../libs/db/db'
import {DesiredLanes} from '../libs/entities/desired-lanes'

class DesiredLanesService {
  private readonly desiredLanesRepository: Repository<DesiredLanes>

  constructor() {
    this.desiredLanesRepository = dbmsMysql.getRepository(DesiredLanes)
  }

  async createDesiredLanes(customerId: number, desiredLanes: DesiredLanesDto[]): Promise<InsertResult> {

    const insertObjects = desiredLanes.map((lane) => ({
      fromCity: lane.fromCity,
      toCity: lane.toCity,
      customerInfoId: customerId,
    }));
    return await this.desiredLanesRepository.insert(insertObjects);
  }
}
export default new DesiredLanesService()
