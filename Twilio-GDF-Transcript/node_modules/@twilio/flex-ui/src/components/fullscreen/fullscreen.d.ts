import * as React from "react";
import * as hoistNonReactStatics from "hoist-non-react-statics";
import { FullscreenConfig } from "./Fullscreenable.definitions";
export declare const makeFullscreenable: <C extends React.ComponentType<any>>(Component: C) => {
    new (props: Readonly<React.ComponentProps<C>>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<React.ComponentProps<C>>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<React.ComponentProps<C>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<React.ComponentProps<C>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<React.ComponentProps<C>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<React.ComponentProps<C>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<React.ComponentProps<C>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<React.ComponentProps<C>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<React.ComponentProps<C>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<React.ComponentProps<C>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: React.ComponentProps<C>, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<React.ComponentProps<C>>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<React.ComponentProps<C>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<React.ComponentProps<C>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<React.ComponentProps<C>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<React.ComponentProps<C>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<React.ComponentProps<C>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<React.ComponentProps<C>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<React.ComponentProps<C>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<React.ComponentProps<C>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    readonly displayName: string;
    fullscreen: Partial<FullscreenConfig>;
    contextType?: React.Context<any>;
} & hoistNonReactStatics.NonReactStatics<C, {}>;
export declare const isFullscreen: () => boolean;
