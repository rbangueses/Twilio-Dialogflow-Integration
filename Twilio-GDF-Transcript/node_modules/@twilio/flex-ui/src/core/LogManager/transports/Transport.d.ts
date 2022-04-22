/**
 * A base class to inherit from when creating a transport class for a specific domain.
 * Transport's goal is to deliver data formatted by a formatter to a recipient.
 * @category Log Manager
 * @hideconstructor
 * @memberof Log
 * @private
 */
export declare abstract class Transport {
    /**
     * Provide data to a recipient
     * @method flush
     * @memberof Log.Transport
     * @instance
     */
    abstract flush(data: any): any;
}
