import { Request, Response, Router } from 'express';
import { ManagementService } from '../../../core/application/management.service';
import { ManagementRepository } from '../outbound/management.repository';

export class ManagementController {
  public router: Router;
  private managementService: ManagementService;

  constructor() {
    this.router = Router();
    
    const repository = new ManagementRepository();
    this.managementService = new ManagementService(repository);

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/upcoming-appointments', this.getUpcomingAppointments.bind(this));

    this.router.patch('/:appointmentId/complete', this.completeAppointment.bind(this));

    this.router.patch('/:appointmentId/cancel', this.cancelAppointment.bind(this));
  }

  private async getUpcomingAppointments(req: Request, res: Response) {
    try {
      const appointments = await this.managementService.getUpcomingAppointments();
      return res.json(appointments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  private async completeAppointment(req: Request, res: Response) {
    const { appointmentId } = req.params;
    try {
      const updated = await this.managementService.markAppointmentAsCompleted(appointmentId);
      return res.json(updated);
    } catch (error: any) {
      if (error.message === 'Appointment not found') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  private async cancelAppointment(req: Request, res: Response) {
    const { appointmentId } = req.params;
    try {
      const updated = await this.managementService.cancelAppointment(appointmentId);
      return res.json(updated);
    } catch (error: any) {
      if (error.message === 'Appointment not found') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }
}
