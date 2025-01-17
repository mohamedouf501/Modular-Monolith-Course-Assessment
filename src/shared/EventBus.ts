import { EventEmitter } from "events";
import { IEventBus } from "./IEventBus";

export class EventBus implements IEventBus {
 private readonly emitter = new EventEmitter();

 publish(event: any, topicName: string): void {
  this.emitter.emit(topicName, event);
 }

 subscribe<T>(topicName: string, handler: (event: T) => void): void {
  this.emitter.on(topicName, handler);
 }
}
