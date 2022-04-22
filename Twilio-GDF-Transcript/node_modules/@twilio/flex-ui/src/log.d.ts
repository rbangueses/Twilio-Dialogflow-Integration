import * as loglevel from "loglevel";
import { LogManager } from "./core/LogManager";
declare const flexLogger: loglevel.Logger;
declare const logManager: LogManager;
export { flexLogger as default, flexLogger as log, logManager };
