import * as React from "react";
import { ThemeProps } from "../../theme";
import { UserControlsChildrenProps } from "./UserControls";
export declare class UserControlsImpl extends React.PureComponent<UserControlsChildrenProps & ThemeProps> {
    static readonly displayName = "UserControls";
    private modalPopup;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleWindowResize;
    render(): JSX.Element;
    private onActivityClick;
    private onLogoutClick;
    private setModalPopupRef;
}
