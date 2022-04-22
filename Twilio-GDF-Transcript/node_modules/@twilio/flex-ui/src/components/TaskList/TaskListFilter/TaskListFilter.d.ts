import * as React from "react";
import * as AppConfig from "../../../state/AppConfig";
import { ThemeProps } from "../../theme";
export interface TaskListFilterProps {
    value: AppConfig.TaskFilter;
    filters: Array<AppConfig.TaskFilter>;
}
export declare class TaskListFilter extends React.PureComponent<TaskListFilterProps & ThemeProps> {
    static readonly displayName = "TaskListFilter";
    private modalPopup;
    render(): JSX.Element;
    private isModalOpen;
    private getFilterText;
    private onFilterClick;
    private handleModalChange;
    private setModalPopupRef;
}
