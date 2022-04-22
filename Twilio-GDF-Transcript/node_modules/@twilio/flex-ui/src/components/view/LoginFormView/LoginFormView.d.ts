import * as React from "react";
import { ThemeProps } from "../../theme";
import { Config } from "../../../state/AppConfig";
/**
 * @function LoginFormView.onErrorFunction
 * @param {*} error object
 * @return {*}
 * @private
 */
/**
 * @function LoginFormView.onSuccessFunction
 * @param {Config} determinedConfig config object
 * @return {*}
 * @private
 */
/**
 * LoginFormView properties
 * @typedef LoginFormView.LoginFormViewProps
 * @property {LoginFormView.onErrorFunction} [onError] callback invoked in case of error
 * @property {LoginFormView.onSuccessFunction} [onSuccess] callback invoked in case of success
 * @property {Config} [userConfig] user configuration object
 * @property {string} [initialRuntimeDomain] runtime domain for your Flex application
 * @property {boolean} [userLoggedOut] whether the user is currently logged out or not
 * @private
 */
export interface LoginFormViewProps {
    onError?: (error: any) => any;
    onSuccess?: (determinedConfig: Config) => any;
    userConfig?: Config;
    initialRuntimeDomain?: string;
    userLoggedOut?: boolean;
}
/**
 * @classdesc Login form
 * @component
 * @hideconstructor
 * @param {LoginFormView.LoginFormViewProps} props - props
 * @category Components / Basic
 * @private
 */
export declare class LoginFormView extends React.Component<LoginFormViewProps & ThemeProps> {
    /**
     * Default properties
     *
     * @static
     * @type {LoginFormView.LoginFormViewProps}
     * @readonly
     */
    static defaultProps: {
        userConfig: {};
        initialRuntimeDomain: string;
        userLoggedOut: boolean;
    };
    render(): JSX.Element;
}
