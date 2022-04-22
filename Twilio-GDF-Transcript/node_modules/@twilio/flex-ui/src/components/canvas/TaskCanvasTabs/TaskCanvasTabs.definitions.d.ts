import { TaskCanvasChildrenProps } from "../TaskCanvas/TaskCanvas.definitions";
/**
 * Properties of children in task canvas tabs.
 * @typedef {TaskCanvasTabs.TaskCanvasChildrenProps} TaskCanvasTabs.TaskCanvasTabsChildrenProps
 * @property {boolean} [hasMarkdownSupport] - Whether markdown feature is enabled or not
 * @property {string} [selectedTabName] - Selected tab name.
 */
export interface TaskCanvasTabsChildrenProps extends TaskCanvasChildrenProps {
    selectedTabName?: string;
    hasMarkdownSupport?: boolean;
    uniqueName?: string;
}
/**
 * Properties of task canvas tabs component.
 * @typedef TaskCanvasTabs.TaskCanvasTabsProps
 */
export interface TaskCanvasTabsProps {
}
