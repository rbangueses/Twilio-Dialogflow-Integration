/// <reference types="react" />
import { ThemeProps } from "../../theme";
export interface RuntimeLookupResponse {
    sso: string;
    accountSid: string;
}
export interface RuntimeLoginProps {
    onSuccess: (RuntimeLookupResponse: any, val: string) => any;
    mapDomainToLookup?: (val: string) => string;
    adminLoginUrl?: string;
}
export declare const RuntimeLoginView: (props: RuntimeLoginProps & ThemeProps) => JSX.Element;
