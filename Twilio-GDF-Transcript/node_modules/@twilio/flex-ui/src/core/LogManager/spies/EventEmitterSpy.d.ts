import { Spy, SpyCommonConfigurableOptions, SpyConstructorOptions } from "./Spy";
/**
 * @package
 * @typedef {object} EventEmitterSpySpecificOptions
 * @property {Array<string>} events events to listen to
 * @memberof Log
 */
declare type EventEmitterSpySpecificOptions = {
    events: Array<string>;
};
/**
 * @typedef {object} EventEmitterSpyOptions
 * @mixes Log.SpyCommonConfigurableOptions
 * @mixes Log.EventEmitterSpySpecificOptions
 * @memberof Log
 */
export declare type EventEmitterSpyOptions = SpyCommonConfigurableOptions & EventEmitterSpySpecificOptions;
export declare type EventEmitterSpyConstructorOptions = SpyConstructorOptions & EventEmitterSpySpecificOptions;
export declare class EventEmitterSpy extends Spy {
    private readonly events;
    constructor(options: EventEmitterSpyConstructorOptions);
    start(): void;
    stop(): void;
}
export {};
