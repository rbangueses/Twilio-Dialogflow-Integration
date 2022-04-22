import * as React from "react";
import { SideLinkItemProps, SideLinkItemChildrenProps } from "../SideLink/SideLink.definitions";
/**
 * @class SideLinkAgentDesktop
 * @classdesc This component renders side link for Agent desktop view.
 * @component
 * @hideconstructor
 * @category Components / Basic
 * @param {SideLink.SideLinkItemProps} props - Properties to be passed to configure this component.
 * @private
 */
export declare class SideLinkAgentDesktop extends React.PureComponent<SideLinkItemProps> {
    private static getBadgeChildren;
    /**
     * Default properties
     *
     * @static
     * @type {SideLink.SideLinkItemChildrenProps}
     * @readonly
     */
    static defaultProps: SideLinkItemChildrenProps;
    private gotoAgentDesktop;
    render(): JSX.Element;
}
