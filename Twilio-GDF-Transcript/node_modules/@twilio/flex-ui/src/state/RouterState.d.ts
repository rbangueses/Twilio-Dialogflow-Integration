import { AnyAction } from "redux";
import { RouterState } from "react-router-redux";
import { Config } from "./AppConfig";
export interface RootAction extends AnyAction {
    payload: any;
    meta: any;
}
export declare const FLEX_LOCATION_CHANGE = "@@flex/LOCATION_CHANGE";
export declare const createReducer: (config: Config) => (state: RouterState, action: RootAction) => any;
