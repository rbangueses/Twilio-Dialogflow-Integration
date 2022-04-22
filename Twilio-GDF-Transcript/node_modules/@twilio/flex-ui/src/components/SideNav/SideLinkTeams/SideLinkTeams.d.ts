import * as React from "react";
import { SideLinkItemProps, SideLinkItemChildrenProps } from "../SideLink/SideLink.definitions";
/**
 * @class SideLinkTeams
 * @classdesc This component renders side link for teams view.
 * @component
 * @hideconstructor
 * @category Components / Basic
 * @param {SideLink.SideLinkItemProps} props - Properties to be passed to configure this component.
 * @private
 */
export declare class SideLinkTeams extends React.PureComponent<SideLinkItemProps> {
    /**
     * Default properties
     *
     * @static
     * @type {SideLink.SideLinkItemChildrenProps}
     * @readonly
     */
    static defaultProps: SideLinkItemChildrenProps;
    private gotoTeams;
    render(): JSX.Element;
}
