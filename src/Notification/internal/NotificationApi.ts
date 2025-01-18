import { INotificationApi } from "../INotificationApi";

export class NotificationApi implements INotificationApi {
 notify(payload: any, topicName: string): void {
  console.log(`Notifying topic: ${topicName} with payload:`, payload);
 }
}
