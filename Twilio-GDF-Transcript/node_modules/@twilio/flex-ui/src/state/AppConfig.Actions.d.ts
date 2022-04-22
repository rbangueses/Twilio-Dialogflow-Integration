import { Action } from "redux";
import { Config } from "./AppConfig";
export interface AppConfigAction extends Action {
    readonly payload: Config;
}
export declare function reduce(state: Config, action: AppConfigAction): Config;
export declare class Actions {
    static initConfig(config: Config): void;
}
