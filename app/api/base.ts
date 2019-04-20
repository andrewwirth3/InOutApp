import buildUrl from 'build-url'

export class QueryParam {
    public name: string;
    public value: any;
}

export default class BaseApi {
    private baseUrl: string = "http://localhost:9000/";

    protected url(path: string, params: QueryParam[] = [], hash: string = null) : string {
        let queryParams: any = null;
        if (params.length > 0) {
            queryParams = {};
            params.forEach(param => {
                queryParams[param.name] = param.value;
            });
        }
        return buildUrl(this.baseUrl, { path, hash, queryParams });
    }
}