import { History, BrowserHistoryBuildOptions, MemoryHistoryBuildOptions } from "history";
export declare type HistoryBuildOptions = BrowserHistoryBuildOptions | MemoryHistoryBuildOptions;
export declare function isHistory(arg: object): arg is History;
export declare type HistoryType = "browser" | "memory";
export declare function isHistoryType(arg: string): arg is HistoryType;
export interface HistoryParams {
    type?: HistoryType;
    history?: HistoryBuildOptions;
    isolate?: boolean;
}
export declare function isHistoryParams(arg: object): arg is HistoryParams;
export default function getHistory(params?: HistoryParams): History;
export declare function setHistory(h: History): void;
