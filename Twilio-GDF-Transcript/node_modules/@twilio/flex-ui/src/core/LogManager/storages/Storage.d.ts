import { LogEntry } from "../spies";
/**
 * A base class to inherit from when creating a storage class for a specific domain.
 * A storage receives data obtained by a spy, append it to previously gathered data and may pass it on for other modules.
 * @category Log Manager
 * @hideconstructor
 * @memberof Log
 * @private
 */
export declare abstract class Storage {
    /**
     * Add a log entry to the storage
     * @method add
     * @param {Log.LogEntry} data data unit that shall be added to the storage
     * @memberof Log.Storage
     * @instance
     */
    abstract add(data: LogEntry): Promise<ReturnType<Storage["get"]>>;
    /**
     * Returns stored log entries
     * @method get
     * @returns {Array<Log.LogEntry>}
     * @memberof Log.Storage
     * @instance
     */
    abstract get(): Array<LogEntry>;
    /**
     * Removes stored log entries
     * @method clear
     * @memberof Log.Storage
     * @instance
     */
    abstract clear(): void;
    constructor();
}
