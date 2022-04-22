import { Spy, SpyCommonConfigurableOptions, SpyConstructorOptions } from "./Spy";
/**
 * @package
 * @typedef {object} DOMEventsSpySpecificOptions
 * @property {Array<string>} [events] events to listen to
 * @memberof Log
 */
declare type DOMEventsSpySpecificOptions = {
    events: Array<string>;
};
/**
 * @typedef {object} DOMEventsSpyOptions
 * @mixes Log.SpyCommonConfigurableOptions
 * @mixes Log.DOMEventsSpySpecificOptions
 * @memberof Log
 */
export declare type DOMEventsSpyOptions = SpyCommonConfigurableOptions & DOMEventsSpySpecificOptions;
export declare type DOMEventsSpyConstructorOptions = SpyConstructorOptions & DOMEventsSpySpecificOptions;
export declare class DOMEventsSpy extends Spy {
    private readonly events;
    constructor(options: DOMEventsSpyConstructorOptions);
    start(): void;
    stop(): void;
    private applyMiddleware;
}
export {};
