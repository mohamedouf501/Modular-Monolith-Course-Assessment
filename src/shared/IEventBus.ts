export interface IEventBus {
 publish(event: any, topicName: string): void;
 subscribe<T>(topicName: string, handler: (event: T) => void): void;
}
