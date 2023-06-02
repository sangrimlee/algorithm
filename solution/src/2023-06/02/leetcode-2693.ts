/**
 * 2693. Call Function with Custom Context
 * https://leetcode.com/problems/call-function-with-custom-context
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Function {
    callPolyfill(context: Record<any, any>, ...args: any[]): any;
  }
}

Function.prototype.callPolyfill = function (context, ...args): any {
  return this.bind(context)(...args);
};

export {};
