import * as React from "react";
interface NoDataPlaceholderProps {
    heading: React.ReactChild;
    body: React.ReactChild;
    image?: React.ReactElement<any>;
    linkUrl?: string;
    linkText?: React.ReactChild;
}
export declare class NoDataPlaceholder extends React.PureComponent<NoDataPlaceholderProps> {
    render(): JSX.Element;
}
export {};
