/* tslint:disable */
/* eslint-disable */
/**
 * Cat API
 * ![cat-api-logo](https://thecatapi.com/_app/immutable/assets/thecatapi-logo.78868573.svg)  ## An open, free, read & write API all about Cats The Cat API gives you access to 10000\'s of Cat images, and breeds. - Upload your own Images - Get detailed info on all Cat Breeds - Allow your Users to Favourite or Vote on Images - Save a custom value with each request so you can match data to your Users  ## How do i get access? Just sign up for an API Key from https://thecatapi.com for free. We\'re looking forward to seeing what you build! Don\'t forget to checkout it\'s sister API - TheDogAPI.com
 *
 * The version of the OpenAPI document: 1.6.3
 * Contact: aden@thatapicompany.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface WebhooksPostRequest {
    body?: object;
}

/**
 * 
 */
export class WebhooksApi extends runtime.BaseAPI {

    /**
     * Create Webhook
     */
    async webhooksPostRaw(requestParameters: WebhooksPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = await this.configuration.apiKey("X-API-KEY"); // apikeyAuth authentication
        }

        const response = await this.request({
            path: `/webhooks`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Create Webhook
     */
    async webhooksPost(requestParameters: WebhooksPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.webhooksPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
