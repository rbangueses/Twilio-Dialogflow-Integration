import { LogEntry } from ".";
/**
 * A function that a spy uses to pass on collected data
 * @category Log Manager
 * @typedef {function} NotifyCallback
 * @param {Log.LogEntry} arg data unit collected by a spy
 * @memberof Log
 */
export declare type NotifyCallback = (arg: LogEntry) => any;
/**
 * @category Log Manager
 * @typedef {function} OnStartCallback
 * @param {any} returnedValue a value returned from the `start` method of a spy
 * @memberof Log
 */
export declare type OnStartCallback = (returnedValue?: any) => void;
/**
 * Configurable options common to all spies
 * @category Log Manager
 * @typedef {object} SpyCommonConfigurableOptions
 * @property {Log.Target} [target] an entity that is being tracked by spy
 * @property {string} [targetAlias] an human-readable description of a target
 * @property {Log.OnStartCallback} [onStart] allows to run some logic after a spy started
 * @memberof Log
 */
export interface SpyCommonConfigurableOptions {
    target?: any;
    targetAlias?: string;
    onStart?: OnStartCallback;
}
/**
 * @category Log Manager
 * @typedef {object} SpyConstructorOptions
 * @property {NotifyCallback} trigger
 * @mixes SpyCommonConfigurableOptions
 * @memberof Log
 */
export declare type SpyConstructorOptions = SpyCommonConfigurableOptions & {
    trigger: NotifyCallback;
};
/**
 * A base class to inherit from when creating a spy class for a specific domain.
 * A spy goal is to invoke a trigger function with a payload, containing logged data.
 * @category Log Manager
 * @memberof Log
 * @private
 */
export declare abstract class Spy {
    protected target: any;
    protected targetAlias: any;
    protected trigger: NotifyCallback;
    protected onStart: OnStartCallback;
    /**
     * Will be executed when a related log manager starts
     * @method start
     * @memberof Log.Spy
     * @instance
     */
    abstract start(): void;
    /**
     * Will be executed when a related log manager stops
     * @method stop
     * @memberof Log.Spy
     * @instance
     */
    abstract stop(): void;
    /**
     * @param {Log.SpyConstructorOptions} options
     */
    constructor(options: SpyConstructorOptions);
}
