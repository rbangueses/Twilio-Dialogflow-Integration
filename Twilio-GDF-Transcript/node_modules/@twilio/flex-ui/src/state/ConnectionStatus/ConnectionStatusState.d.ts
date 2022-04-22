import { SyncClient } from "twilio-sync";
import { Dispatch } from "redux";
import { ConnectionStatus, ConnectionStatusActionTypes } from "./ConnectionStatusTypes";
export declare function reduce(state: ConnectionStatus, action: ConnectionStatusActionTypes): ConnectionStatus;
export declare class ConnectionStatusState {
    private static syncClient;
    private static dispatch;
    static init(syncClient?: SyncClient, dispatch?: Dispatch<ConnectionStatusActionTypes>): void;
    private static updateConnectionState;
    private static dispatchUpdate;
}
