import * as React from "react";
import { SupervisorWorkerState } from "../../../state/State.definition";
export interface UserCardWrapperProps {
    item: SupervisorWorkerState;
}
export declare class UserCardWrapper extends React.Component<UserCardWrapperProps> {
    render(): JSX.Element;
}
