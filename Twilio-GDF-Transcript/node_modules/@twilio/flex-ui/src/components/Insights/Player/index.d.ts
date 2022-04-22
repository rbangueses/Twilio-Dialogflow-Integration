/**
 * A collection of Actions, Classes and Types related to Insights Player.
 * @static
 * @class Insights.Player
 * @memberof Insights
 * @hideconstructor
 * @category Insights
 */
export { InsightsPlayerPlayActionPayload } from "./Player.definitions";
/**
 * These actions that can be invoked by {@link ActionsManager.invokeAction}.
 * @alias Action
 * @memberof Insights.Player
 * @property {string} INSIGHTS_PLAYER_PLAY Shows player and plays recording. Use {@link Insights.Player.InsightsPlayerPlayActionPayload} as payload.
 * @property {string} INSIGHTS_PLAYER_SHOW Shows the player
 * @property {string} INSIGHTS_PLAYER_HIDE Hides the player
 * @property {string} INSIGHTS_PLAYER_INITIALIZED Invoked when the player is rendered
 * @example
 * Flex.Actions.invokeAction(Flex.Insights.Actions.INSIGHTS_PLAYER_PLAY, {segmentId: "e5c46a75-0f56..."})
 */
export declare const Action: {
    INSIGHTS_PLAYER_PLAY: string;
    INSIGHTS_PLAYER_SHOW: string;
    INSIGHTS_PLAYER_HIDE: string;
    INSIGHTS_PLAYER_INITIALIZED: string;
};
