/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssetReference } from '../models/AssetReference';
import type { Balances } from '../models/Balances';
import type { GeneralError } from '../models/GeneralError';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class HistoricBalancesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get balances at specific time in the past
     * @returns any List of asset balances.
     * @returns GeneralError Failed to process request.
     * @throws ApiError
     */
    public getHistoricBalances({
        xFbapiKey,
        xFbapiNonce,
        xFbapiTimestamp,
        xFbapiSignature,
        accountId,
        time,
        limit = 10,
        startingAfter,
        endingBefore,
        asset,
    }: {
        /**
         * API authentication key.
         */
        xFbapiKey: string,
        /**
         * Unique identifier of the request.
         */
        xFbapiNonce: string,
        /**
         * Request timestamp in milliseconds since Unix epoch.
         */
        xFbapiTimestamp: number,
        /**
         * Request signature using the chosen cryptographic algorithm. The signature is to be calculated on concatenation of the following request fields in the specified order:
         * - `X-FBAPI-TIMESTAMP` - `X-FBAPI-NONCE` - HTTP request method in upper case - Endpoint path, including the query parameters - Request body
         */
        xFbapiSignature: string,
        /**
         * Sub-account identifier.
         */
        accountId: string,
        /**
         * Time of the requested balances.
         */
        time: string,
        /**
         * Maximum number of returned items.
         */
        limit?: number,
        /**
         * Object ID. Instructs to return the items immediately following this object. Cannot be used together with `endingBefore`.
         */
        startingAfter?: string,
        /**
         * Object ID. Instructs to return the items immediately preceding this object. Cannot be used together with `startingAfter`.
         */
        endingBefore?: string,
        /**
         * Limits the response to one asset.
         */
        asset?: AssetReference,
    }): CancelablePromise<{
        balances: Balances;
    } | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{accountId}/historic-balances',
            path: {
                'accountId': accountId,
            },
            headers: {
                'X-FBAPI-KEY': xFbapiKey,
                'X-FBAPI-NONCE': xFbapiNonce,
                'X-FBAPI-TIMESTAMP': xFbapiTimestamp,
                'X-FBAPI-SIGNATURE': xFbapiSignature,
            },
            query: {
                'limit': limit,
                'startingAfter': startingAfter,
                'endingBefore': endingBefore,
                'asset': asset,
                'time': time,
            },
            errors: {
                400: `Request could not be processed due to a client error.`,
            },
        });
    }

}
