import { Spy, SpyCommonConfigurableOptions, SpyConstructorOptions } from "./Spy";
/**
 * @package
 * @typedef {object} ClassProxySpySpecificOptions
 * @property {Array<string>} [methods] methods of a target class to be spied on
 * @memberof Log
 */
declare type ClassProxySpySpecificOptions = {
    methods?: Array<string>;
};
/**
 * @typedef {object} ClassProxySpyOptions
 * @mixes Log.SpyCommonConfigurableOptions
 * @mixes Log.ClassProxySpySpecificOptions
 * @memberof Log
 */
export declare type ClassProxySpyOptions = SpyCommonConfigurableOptions & ClassProxySpySpecificOptions;
export declare type ClassProxySpyConstructorOptions = SpyConstructorOptions & ClassProxySpySpecificOptions;
export declare class ClassProxySpy extends Spy {
    private readonly methods;
    private stopped?;
    constructor(options: ClassProxySpyConstructorOptions);
    start(): void;
    stop(): void;
}
export {};
