import * as React from "react";
import { InsightsPlayerMediaLink } from "../Player/Player.definitions";
import { MediaSelectDropdownProps } from "./MediaSelectDropdown.definitions";
export declare class MediaSelectDropdownImpl extends React.PureComponent<MediaSelectDropdownProps> {
    private handleChange;
    getMediaLink: (link: InsightsPlayerMediaLink, index: number) => JSX.Element;
    render(): JSX.Element;
}
