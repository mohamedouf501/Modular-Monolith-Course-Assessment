export interface IEventPublisher {
 publish(event: any, topicName: string): void;
}
