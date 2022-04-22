import { LogEntry } from "../spies";
import { Storage } from "./Storage";
/**
 * @typedef {object} Log.LocalStorageSpecificOptions
 * @property {string} [identifier]
 */
declare type LocalStorageSpecificOptions = {
    identifier?: string;
};
/**
 * @typedef {object} Log.LocalStorageOptions
 * @mixes Log.LocalStorageSpecificOptions
 */
export declare type LocalStorageOptions = LocalStorageSpecificOptions;
export declare type LocalStorageConstructorOptions = LocalStorageSpecificOptions;
/**
 * An implementations that stores information in the local storage
 * @category Log Manager / Storages
 * @extends Log.Storage
 * @hideconstructor
 * @private
 */
export declare class LocalStorage extends Storage {
    static calculateUsedSpace(data: string): number;
    private maxLocalStorageSize;
    private cache;
    private localStorageKey;
    private set;
    private truncate;
    /**
     * @constructor
     * @param {LocalStorageConstructorOptions} options Options to instantiate a local storage with
     */
    constructor(options: LocalStorageConstructorOptions);
    /**
     * Set a maximum local storage content size
     * @param newSizeLimit New content size limit in Kbs
     * @returns {void}
     */
    setMaxLocalStorageSize(newSizeLimit: number): void;
    /**
     * Get a maximum local storage size
     * @returns {number} Maximum size of the local storage in Kbs
     */
    getMaxLocalStorageSize(): number;
    /**
     * Add a LogEntry to the storage
     * @param {LogEntry} diff A new LogEntry to add to the storage
     * @returns {Promise} A promise that resolves with data from the store
     */
    add(diff: LogEntry): Promise<ReturnType<LocalStorage["get"]>>;
    /**
     * Get the current array of LogEntries stored in the local storage
     * @returns {LogEntry[]} Array of LogEntries
     */
    get(): LogEntry[];
    /**
     * Clear all records in the local storage
     * @returns {Promise} A new (empty) list of LogEntries in the store
     */
    clear(): Promise<ReturnType<LocalStorage["get"]>>;
}
export {};
