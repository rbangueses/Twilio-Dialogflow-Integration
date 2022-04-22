import { Spy, SpyCommonConfigurableOptions, SpyConstructorOptions } from "./Spy";
/**
 * @package
 * @typedef {object} LoglevelSpySpecificOptions
 * @property {Array<string>} [methods] methods of a target class to be spied on
 * @memberof Log
 */
declare type LoglevelSpySpecificOptions = {
    methods?: Array<string>;
};
/**
 * @typedef {object} LoglevelSpyOptions
 * @mixes Log.SpyCommonConfigurableOptions
 * @mixes Log.LoglevelSpySpecificOptions
 * @memberof Log
 */
export declare type LoglevelSpyOptions = SpyCommonConfigurableOptions & LoglevelSpySpecificOptions;
export declare type LoglevelSpyConstructorOptions = SpyConstructorOptions & LoglevelSpySpecificOptions;
export declare class LoglevelSpy extends Spy {
    private readonly methods;
    private stopped;
    constructor(options: LoglevelSpyConstructorOptions);
    start(): void;
    stop(): void;
}
export {};
