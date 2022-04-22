import * as React from "react";
import { WorkerListFilter } from "../WorkersDataTable";
export interface WorkerListFilterSelectProps {
    activeFilter: WorkerListFilter;
    filters: Array<WorkerListFilter>;
    onFilterChanged?: (filter: WorkerListFilter) => void;
}
export declare class WorkerListFilterSelect extends React.PureComponent<WorkerListFilterSelectProps> {
    private handleChange;
    render(): JSX.Element;
    static getFilterText(filter: WorkerListFilter): string | JSX.Element;
}
