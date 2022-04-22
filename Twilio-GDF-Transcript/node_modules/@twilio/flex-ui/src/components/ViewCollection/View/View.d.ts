import * as React from "react";
import { ViewAdditionalProps } from "../ViewCollection";
export declare type ViewFC = React.FC<ViewProps & ViewAdditionalProps>;
export declare const View: React.FC<ViewProps & Partial<ViewAdditionalProps>>;
export declare enum ViewMountRule {
    Always = "Always",
    WhenActive = "WhenActive",
    WhenHasBeenActive = "WhenHasBeenActive"
}
export interface ViewProps {
    name: string;
    className?: string;
    children: React.ReactNode;
    keepMounted?: boolean;
    mountRule?: ViewMountRule;
}
