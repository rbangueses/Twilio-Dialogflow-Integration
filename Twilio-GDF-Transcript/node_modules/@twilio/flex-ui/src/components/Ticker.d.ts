import * as React from "react";
export declare class Ticker extends React.Component<{
    children: () => React.ReactNode;
}> {
    tick: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
