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

export interface FavouritesFavouriteIdDeleteRequest {
    xApiKey: string;
    favouriteId: string;
    contentType?: string;
}

export interface FavouritesFavouriteIdGetRequest {
    xApiKey: string;
    favouriteId: string;
    contentType?: string;
}

export interface FavouritesGetRequest {
    xApiKey: string;
    contentType?: string;
}

export interface FavouritesPostRequest {
    xApiKey: string;
    contentType?: string;
    body?: object;
}

/**
 * 
 */
export class FavouritesApi extends runtime.BaseAPI {

    /**
     * /favourites/:favourite_id
     */
    async favouritesFavouriteIdDeleteRaw(requestParameters: FavouritesFavouriteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['xApiKey'] == null) {
            throw new runtime.RequiredError(
                'xApiKey',
                'Required parameter "xApiKey" was null or undefined when calling favouritesFavouriteIdDelete().'
            );
        }

        if (requestParameters['favouriteId'] == null) {
            throw new runtime.RequiredError(
                'favouriteId',
                'Required parameter "favouriteId" was null or undefined when calling favouritesFavouriteIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['contentType'] != null) {
            headerParameters['Content-Type'] = String(requestParameters['contentType']);
        }

        if (requestParameters['xApiKey'] != null) {
            headerParameters['x-api-key'] = String(requestParameters['xApiKey']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = await this.configuration.apiKey("X-API-KEY"); // apikeyAuth authentication
        }

        const response = await this.request({
            path: `/favourites/{favourite_id}`.replace(`{${"favourite_id"}}`, encodeURIComponent(String(requestParameters['favouriteId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * /favourites/:favourite_id
     */
    async favouritesFavouriteIdDelete(requestParameters: FavouritesFavouriteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.favouritesFavouriteIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * /favourites/:favourite_id
     */
    async favouritesFavouriteIdGetRaw(requestParameters: FavouritesFavouriteIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['xApiKey'] == null) {
            throw new runtime.RequiredError(
                'xApiKey',
                'Required parameter "xApiKey" was null or undefined when calling favouritesFavouriteIdGet().'
            );
        }

        if (requestParameters['favouriteId'] == null) {
            throw new runtime.RequiredError(
                'favouriteId',
                'Required parameter "favouriteId" was null or undefined when calling favouritesFavouriteIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['contentType'] != null) {
            headerParameters['Content-Type'] = String(requestParameters['contentType']);
        }

        if (requestParameters['xApiKey'] != null) {
            headerParameters['x-api-key'] = String(requestParameters['xApiKey']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = await this.configuration.apiKey("X-API-KEY"); // apikeyAuth authentication
        }

        const response = await this.request({
            path: `/favourites/{favourite_id}`.replace(`{${"favourite_id"}}`, encodeURIComponent(String(requestParameters['favouriteId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * /favourites/:favourite_id
     */
    async favouritesFavouriteIdGet(requestParameters: FavouritesFavouriteIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.favouritesFavouriteIdGetRaw(requestParameters, initOverrides);
    }

    /**
     * /favourites
     */
    async favouritesGetRaw(requestParameters: FavouritesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['xApiKey'] == null) {
            throw new runtime.RequiredError(
                'xApiKey',
                'Required parameter "xApiKey" was null or undefined when calling favouritesGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['contentType'] != null) {
            headerParameters['Content-Type'] = String(requestParameters['contentType']);
        }

        if (requestParameters['xApiKey'] != null) {
            headerParameters['x-api-key'] = String(requestParameters['xApiKey']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = await this.configuration.apiKey("X-API-KEY"); // apikeyAuth authentication
        }

        const response = await this.request({
            path: `/favourites`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * /favourites
     */
    async favouritesGet(requestParameters: FavouritesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.favouritesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * /favourites
     */
    async favouritesPostRaw(requestParameters: FavouritesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['xApiKey'] == null) {
            throw new runtime.RequiredError(
                'xApiKey',
                'Required parameter "xApiKey" was null or undefined when calling favouritesPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['contentType'] != null) {
            headerParameters['Content-Type'] = String(requestParameters['contentType']);
        }

        if (requestParameters['xApiKey'] != null) {
            headerParameters['x-api-key'] = String(requestParameters['xApiKey']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = await this.configuration.apiKey("X-API-KEY"); // apikeyAuth authentication
        }

        const response = await this.request({
            path: `/favourites`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * /favourites
     */
    async favouritesPost(requestParameters: FavouritesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.favouritesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
