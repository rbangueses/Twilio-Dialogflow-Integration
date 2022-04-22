import * as React from "react";
interface SearchBarProps {
    onSubmit?: (value: string) => void;
    disabled?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}
export declare class SearchBar extends React.PureComponent<SearchBarProps> {
    private static MAX_CHARACTER_LIMIT;
    render(): JSX.Element;
    private onChange;
    private onSubmit;
}
export {};
