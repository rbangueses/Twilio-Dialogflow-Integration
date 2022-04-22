import * as React from "react";
import { ConnectedRouterProps } from "react-router-redux";
import { AppState } from "../../state/AppState";
interface RouterProps {
    children?: React.ReactNode;
}
declare function router(props: RouterProps): React.ReactElement<ConnectedRouterProps<AppState>>;
export declare const Router: typeof router;
export {};
