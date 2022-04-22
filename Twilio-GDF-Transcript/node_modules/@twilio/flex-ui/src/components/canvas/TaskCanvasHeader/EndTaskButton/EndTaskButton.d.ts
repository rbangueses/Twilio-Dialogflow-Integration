import { ThemeProps } from "../../../theme";
import { ITask } from "../../../../models";
import * as React from "react";
export interface EndTaskButtonProps extends ThemeProps {
    task: ITask;
    templateCode?: string;
}
export declare class EndTaskButton extends React.Component<EndTaskButtonProps> {
    render(): JSX.Element;
    private getEndTaskButtonStyle;
    private onCompleteTaskButtonClick;
}
