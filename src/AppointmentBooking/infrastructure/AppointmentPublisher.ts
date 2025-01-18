import { IEventBus } from "../../shared/IEventBus";
import { IEventPublisher } from "../application/IEventPublisher";

export class AppointmentPublisher implements IEventPublisher {
 constructor(private readonly eventBus: IEventBus) {}

 publish(event: any, topicName: string): void {
  this.eventBus.publish(event, topicName);
 }
}
