import * as React from "react";
import { ThemeProps } from "../../theme";
import { ValidationError } from "../../../core/Errors";
import { RuntimeLoginProps } from "./DeprecatedRuntimeLoginView";
interface RuntimeLoginState {
    domain?: string;
    error?: ValidationError;
}
export declare class RuntimeLoginViewImpl extends React.PureComponent<RuntimeLoginProps & ThemeProps, RuntimeLoginState> {
    static readonly defaultProps: Partial<RuntimeLoginProps>;
    constructor(props: any);
    private setDomain;
    private validate;
    private fetchSid;
    private getErrorMessage;
    render(): JSX.Element;
}
export {};
