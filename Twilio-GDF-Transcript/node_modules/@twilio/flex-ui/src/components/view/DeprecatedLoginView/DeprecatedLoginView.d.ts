import * as React from "react";
import { SSOConfig } from "../../../core/SSOLoginHandler";
import { SessionState } from "../../../state/SessionState";
import { ThemeProps } from "../../theme";
export * from "./DeprecatedLoginView.Components";
export interface LoginViewProps {
    readonly logoUrl?: string;
}
export interface LoginViewChildrenProps extends LoginViewProps, ThemeProps {
    readonly session: SessionState;
    readonly ssoConfig?: SSOConfig;
}
export declare class LoginView extends React.PureComponent<Partial<LoginViewProps>> {
    static displayName: string;
    static readonly defaultProps: Partial<LoginViewProps>;
    render(): JSX.Element;
}
