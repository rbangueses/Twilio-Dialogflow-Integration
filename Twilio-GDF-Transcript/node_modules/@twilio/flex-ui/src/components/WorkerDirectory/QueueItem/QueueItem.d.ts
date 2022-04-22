import { ThemeProps } from "../../theme";
import { IQueue } from "../../../models";
import * as React from "react";
export interface QueueItemProps extends ThemeProps {
    queue: IQueue;
    onTransferClick: (options: any) => void;
    isWarmTransferEnabled?: boolean;
}
export declare class QueueItem extends React.Component<QueueItemProps> {
    render(): JSX.Element;
    private onWarmTransferClick;
    private onColdTransferClick;
}
