import { ConnectionState } from "twilio-sync/lib/client";
export declare const CONNECTION_STATUS_CHANGE = "FLEX_CONNECTION_STATUS_CHANGE";
export declare type ConnectionStatus = {
    timestampLastConnected: number;
    connectionState: ConnectionState;
};
export declare type ConnectionStatusActionTypes = {
    type: typeof CONNECTION_STATUS_CHANGE;
    payload: ConnectionState;
};
