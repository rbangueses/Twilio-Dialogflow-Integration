import { TaskChannelDefinition } from "./TaskChannelDefinition";
import { ITask } from "./models";
import * as DefaultTaskChannels from "./task_channels";
export * from "./TaskChannelDefinition";
export { DefaultTaskChannels };
export { TaskChannelHelper } from "./TaskChannelHelper";
/**
 * @alias TaskChannels
 * @classdesc Task Channels Manager
 * @hideconstructor
 * @category Framework / Channels
 */
declare class TaskChannelsManager {
    /**
     * Gets registered task channel definitions
     *
     * @returns {Array<TaskChannelDefinition>}
     * @example
     * import { TaskChannels } from "@twilio/flex-ui";
     * TaskChannels.getRegistered();
     */
    getRegistered(): TaskChannelDefinition[];
    /**
     * Gets task channel definition for a task
     *
     * @param {ITask} task task
     * @returns {TaskChannelDefinition} first matched task channel definition
     * @example
     * import { TaskChannels } from "@twilio/flex-ui";
     * TaskChannels.getForTask(taskObject);
     */
    getForTask(task: ITask): TaskChannelDefinition;
    /**
     * Registers a task channel definition. Definition is prepended to previously registered ones
     * @param {TaskChannelDefinition} definition task channel definition
     * @param {boolean} [mergeWithDefaultChannel=true] whether to merge unspecified defaults in
     * @example
     * import { TaskChannels, DefaultTaskChannels } from "@twilio/flex-ui";
     * const testChannel = DefaultTaskChannels.createChatTaskChannel("testChannel", (task) => true);
     * TaskChannels.register(testChannel);
     */
    register(definition: TaskChannelDefinition, mergeWithDefaultChannel?: boolean): void;
    /**
     * Unregisters previously registered task channel definition
     * @param {TaskChannelDefinition} definition task channel definition to unregister
     * @example
     * import { TaskChannels, DefaultTaskChannels } from "@twilio/flex-ui";
     * const registeredChannels = TaskChannels.getRegistered();
     * const registeredTestChannel = registeredChannels[registeredChannels.length - 1];
     * TaskChannels.unregister(registeredTestChannel);
     */
    unregister(definition: TaskChannelDefinition): void;
}
/**
 * Task Channels Manager
 * @constant {TaskChannelsManager} TaskChannels
 * @category Framework
 * @private
 */
export declare const TaskChannels: TaskChannelsManager;
/**
 * @private
 */
export declare function registerDefaultTaskChannels(FlexComponents: any): void;
/**
 * @private
 */
export declare function initAllRegisteredTaskChannels(FlexComponents: any): void;
