import * as React from "react";
import { ThemeProps } from "../../theme";
export interface AgentsByActivityChartTileStateProps {
    availableAgents: number;
    unavailableAgents: number;
    offlineAgents: number;
}
export declare class AgentsByActivityChartTileImpl extends React.PureComponent<AgentsByActivityChartTileStateProps & ThemeProps> {
    render(): JSX.Element;
}
