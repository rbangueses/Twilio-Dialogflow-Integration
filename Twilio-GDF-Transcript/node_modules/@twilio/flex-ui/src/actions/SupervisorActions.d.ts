import { ITask, IWorker } from "../models";
/**
 * @package
 * @typedef SelectWorkerInSupervisorPayload
 * @property {IWorker} [worker]
 * @property {string} workerSid
 * @memberof Actions
 */
export interface SelectWorkerInSupervisorPayload {
    worker?: IWorker;
    workerSid?: string;
}
/**
 * @package
 * @typedef TaskInSupervisorPayload
 * @property {ITask} [task]
 * @property {string} [sid]
 * @memberof Actions
 */
export interface TaskInSupervisorPayload {
    task?: ITask;
    sid?: string;
}
/**
 * @package
 * @typedef {TaskInSupervisorPayload} MonitorTaskPayload
 * @property {any} [extraParams]
 * @memberof Actions
 */
export interface MonitorTaskPayload extends TaskInSupervisorPayload {
    extraParams?: any;
}
export declare class SupervisorActions {
    static registerActions(): void;
    private static monitorCall;
    private static stopMonitoringCall;
    private static selectTaskInSupervisor;
    private static selectWorkerInSupervisor;
    private static updateSelectWorkerActionPayload;
    private static updateTaskActionPayload;
}
