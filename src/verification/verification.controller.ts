import { Controller, Get, Param } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { VerificationLog } from './interfaces/verification.interface';

/**
 * Verification Controller for VeriTix
 *
 * This controller handles ticket verification HTTP endpoints.
 * Currently a placeholder as per architectural requirements
 * (no business logic in controllers).
 *
 * Future endpoints to be implemented:
 * - POST /verification/verify - Verify a ticket code
 * - POST /verification/check-in - Verify and mark ticket as used
 * - GET /verification/peek/:ticketCode - Check ticket without marking as used
 * - GET /verification/stats/:eventId - Get verification stats for event
 * - GET /verification/logs/:eventId - Get verification logs for event
 *
 * Note: Endpoint implementations will be added when the
 * verification features are implemented.
 */
@Controller('verification')
export class VerificationController {
  // Endpoint implementations will be added in future issues
  // No business logic in controllers - per architectural requirements
  constructor(private readonly verificationService:VerificationService){}
  // get logs for event
  @Get('logs/:eventId')
  getLogsForEvent(@Param('eventId') eventId: string): Promise<VerificationLog[]> {
    return this.verificationService.getLogsForEvent(eventId) as Promise<VerificationLog[]>;
  }

  // get logs for ticket
  @Get('logs/:ticketCode')
  getLogsForTicket(@Param('ticketCode') ticketCode: string): Promise<VerificationLog[]> {
    return this.verificationService.getLogsForTicket(ticketCode) as Promise<VerificationLog[]>;
  }
}
