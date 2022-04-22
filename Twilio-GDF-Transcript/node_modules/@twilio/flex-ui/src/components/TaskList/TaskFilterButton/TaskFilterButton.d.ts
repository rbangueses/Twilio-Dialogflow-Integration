import * as React from "react";
export interface EntryButtonProps {
    isOpen: boolean;
    content: React.ReactNode;
    className?: string;
}
export declare const TaskFilterButton: React.SFC<EntryButtonProps>;
