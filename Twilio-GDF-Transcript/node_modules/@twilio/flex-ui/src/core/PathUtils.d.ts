export declare const RUNTIME_DOMAIN_REGEXP: RegExp;
/**
 * Parses runtime domain from current URL
 *  URL can be either as:
 *    /[runtime-domainformat-1239] or
 *    /login/[any-domain]
 * @private
 * @returns {string} runtime domain if exists
 */
export declare function parseRuntimeDomainFromPathName(): string;
/**
 * Parses destination path parameter from search string.
 *   E.g. ...?path=[/some/dest/path]
 *
 * @private
 * @returns {string} parsed path from query string
 */
export declare function parseDestinationPathFromSearch(): string;
/**
 * Gets custom search string params from current search string by removing standard ones (path param)
 *
 * @private
 * @returns {string}
 */
export declare function getUserParamsFromSearch(): string;
/**
 * Determines ultimate destination path for redirect by concatenating destination path and user params.
 *
 * @private
 * @returns {string}
 */
export declare function getDestinationURLFromLocation(): string;
