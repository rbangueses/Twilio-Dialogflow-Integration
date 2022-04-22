import * as React from "react";
import { ThemeProps } from "../../theme";
import { IWorker } from "../../../models";
export interface TransferClickPayload {
    mode: "WARM" | "COLD";
}
export interface WorkerItemProps extends ThemeProps {
    worker: IWorker;
    onTransferClick: (options: TransferClickPayload) => void;
    isWarmTransferEnabled?: boolean;
}
export declare class WorkerItem extends React.Component<WorkerItemProps> {
    render(): JSX.Element;
    private onWarmTransferClick;
    private onColdTransferClick;
}
