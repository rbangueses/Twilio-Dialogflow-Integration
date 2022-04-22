import * as React from "react";
import { TaskContextProps } from "../context/TaskContext";
/**
 * Task Context Provider props interface
 * @typedef {object} TaskContextProviderProps
 * @property {string} taskSid - Sid of the task
 * @memberof SupervisorTaskContextSource
 */
export interface TaskContextProviderProps {
    taskSid: string;
}
/**
 * @classdesc Supervisor Task Context Source component
 * @component
 * @hideconstructor
 * @param {SupervisorTaskContextSource.TaskContextProviderProps} props properties to be passed to configure this component.
 * @category Framework
 * @private
 */
export declare class SupervisorTaskContextSource extends React.PureComponent<TaskContextProviderProps & TaskContextProps> {
    render(): JSX.Element;
}
