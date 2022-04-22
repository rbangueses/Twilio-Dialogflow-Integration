import { TaskChannelDefinition, TaskChannelApplicableCb } from "../TaskChannelDefinition";
export declare function createCallTaskChannel(name: string, isApplicable: TaskChannelApplicableCb): TaskChannelDefinition;
export declare const Call: TaskChannelDefinition;
export declare function init(FlexComponents: any): void;
