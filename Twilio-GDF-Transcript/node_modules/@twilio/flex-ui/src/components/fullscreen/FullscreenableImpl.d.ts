import * as React from "react";
import { FullscreenConfig } from "./Fullscreenable.definitions";
interface FullscreenableImplProps {
    children?: React.ReactNode;
    wrapperStyles: React.CSSProperties;
    renderButton: FullscreenConfig["renderButton"];
}
export declare class FullscreenableImpl extends React.PureComponent<FullscreenableImplProps, {
    isFullscreen: boolean;
}> {
    wrapper: React.RefObject<HTMLElement>;
    state: {
        isFullscreen: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleButtonClick;
    private fullscreenChangeHandler;
    private fullscreenErrorHandler;
    private isFullscreen;
    renderButton(): React.ReactNode;
    render(): JSX.Element;
}
export {};
