import { InsertResult, Repository} from 'typeorm'
import {DesiredLanesDto} from '../libs/dto/customer-info.dto'
import {dbmsMysql} from '../libs/db/db'
import {DesiredLanes} from '../libs/entities/desired-lanes'

class DesiredLanesService {
  private readonly desiredLanesRepository : Repository<DesiredLanes>
  constructor() {
    this.desiredLanesRepository = dbmsMysql.getRepository(DesiredLanes)
  }
  async createDesiredLanes(desiredLanes : DesiredLanesDto[]) : Promise<InsertResult[]> {
    const insertResults: InsertResult[] = [];
    desiredLanes.map(async (lane) => {
      const result = await this.desiredLanesRepository.insert({
        id: lane.id,
        fromCity: lane.fromCity,
        toCity: lane.toCity,
        customerInfoUuid: lane.customerInfoUuid
      });
      return insertResults.push(result);
    })
    return insertResults;
  }
}
export default new DesiredLanesService()
