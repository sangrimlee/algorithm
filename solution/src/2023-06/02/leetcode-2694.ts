/* eslint-disable */

/**
 * 2694. Event Emitter
 * https://leetcode.com/problems/event-emitter
 */
type Callback = (...args: any[]) => any;
interface Subscription {
  unsubscribe: () => void;
}

export class EventEmitter {
  private readonly events: Map<string, Set<Callback>>;

  constructor() {
    this.events = new Map();
  }

  private addEvent(eventName: string, callback: Callback): void {
    const callbacks = this.events.get(eventName);
    if (callbacks === undefined) {
      this.events.set(eventName, new Set([callback]));
      return;
    }
    callbacks.add(callback);
  }

  private removeEvent(eventName: string, callback: Callback): void {
    const callbacks = this.events.get(eventName);
    if (callbacks === undefined) {
      return;
    }
    callbacks.delete(callback);
  }

  subscribe(eventName: string, callback: Callback): Subscription {
    this.addEvent(eventName, callback);

    return {
      unsubscribe: () => {
        this.removeEvent(eventName, callback);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any {
    const callbacks = this.events.get(eventName);
    if (!callbacks) {
      return [];
    }
    const results: any[] = [];
    callbacks.forEach((callback) => results.push(callback(...args)));
    return results;
  }
}
