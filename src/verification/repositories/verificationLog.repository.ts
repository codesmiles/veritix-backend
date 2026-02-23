import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { VerificationLogEntity } from "../entities/verification-log.entity";
import { DataSource } from "typeorm";


@Injectable()
export class VerificationLogRepository extends Repository<VerificationLogEntity> {
  constructor(private dataSource: DataSource) {
    super(VerificationLogEntity, dataSource.createEntityManager());
  }

  // it will be paginated
  async getLogsForEvent(eventId: string): Promise<VerificationLogEntity[]> {
    return this.find({
      where: { eventId },
    });
  }
  
  // it will be paginated
  async getLogsForTicket(ticketCode: string): Promise<VerificationLogEntity[]> {
    return this.find({
      where: { ticketCode },
    });
  }
 
}
