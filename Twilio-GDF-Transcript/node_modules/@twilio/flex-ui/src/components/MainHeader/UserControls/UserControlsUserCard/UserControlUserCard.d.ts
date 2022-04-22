import { WorkerState } from "../../../../state/WorkerState";
import * as React from "react";
export interface UserControlsUserCardProps {
    className?: string;
    worker: WorkerState;
    large?: boolean;
    innerRef?: any;
    onClick?: (event: any) => void;
}
export declare class UserControlsUserCard extends React.PureComponent<UserControlsUserCardProps> {
    interval: number;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
