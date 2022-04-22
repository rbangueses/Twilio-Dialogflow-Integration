import { AppState } from "./state/AppState";
import * as RouterReducer from "./state/RouterState";
/**
 * Flex reducer for Redux store. Use key `flex` in your redux store for Flex state.
 *
 * @example
 * import { FlexReducer, applyFlexMiddleware} from "@twilio/flex-ui";
 * const reducers = combineReducers({
 *   flex: FlexReducer,
 *   myApp: myAppReducer // application reducer
 * });
 * const myReduxStore = createStore(
 *   reducers,
 *   compose(
 *     applyFlexMiddleware()
 *   )
 * );
 * @param {AppState} state state of the application
 * @param {RouterReducer.RootAction} action dispatched action
 * @returns {AppState} Flex state
 * @method FlexReducer
 * @memberof Store
 */
export declare const FlexReducer: (state: AppState, action: RouterReducer.RootAction) => AppState;
