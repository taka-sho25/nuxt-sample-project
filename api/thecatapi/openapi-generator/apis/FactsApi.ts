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

export interface BreedsBreedIdFactsGetRequest {
    breedId: string;
    limit?: number;
    page?: number;
    order?: string;
}

/**
 * 
 */
export class FactsApi extends runtime.BaseAPI {

    /**
     * Get one or more facts about the Species. For more at a time just update the \'limit\' field, and to paginate through them just increment the \'page\' field.  The response headers have the pagination details, such as how many there are in total, what page you\'re on, and the current amount per page.  To redorder change the order to ASC for ascending order, DESC for descending, and RAND for random order.
     * Get Ordered Fact(s) About Breed
     */
    async breedsBreedIdFactsGetRaw(requestParameters: BreedsBreedIdFactsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['breedId'] == null) {
            throw new runtime.RequiredError(
                'breedId',
                'Required parameter "breedId" was null or undefined when calling breedsBreedIdFactsGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = await this.configuration.apiKey("X-API-KEY"); // apikeyAuth authentication
        }

        const response = await this.request({
            path: `/breeds/{breed_id}/facts`.replace(`{${"breed_id"}}`, encodeURIComponent(String(requestParameters['breedId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get one or more facts about the Species. For more at a time just update the \'limit\' field, and to paginate through them just increment the \'page\' field.  The response headers have the pagination details, such as how many there are in total, what page you\'re on, and the current amount per page.  To redorder change the order to ASC for ascending order, DESC for descending, and RAND for random order.
     * Get Ordered Fact(s) About Breed
     */
    async breedsBreedIdFactsGet(requestParameters: BreedsBreedIdFactsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.breedsBreedIdFactsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get one or more Random facts and the Species. For more at a time just update the \'limit\' field
     * Get Random Fact(s)
     */
    async factsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = await this.configuration.apiKey("X-API-KEY"); // apikeyAuth authentication
        }

        const response = await this.request({
            path: `/facts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get one or more Random facts and the Species. For more at a time just update the \'limit\' field
     * Get Random Fact(s)
     */
    async factsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.factsGetRaw(initOverrides);
        return await response.value();
    }

}
