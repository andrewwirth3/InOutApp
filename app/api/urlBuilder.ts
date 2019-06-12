import buildUrl from 'build-url';

export default class UrlBuilder {
    private baseUrl: string = 'http://localhost:9000/';
    private options: any = {};

    public WithPath (path: string): UrlBuilder {
        this.options.path = path;
        return this;
    }

    public WithHash (hash: string): UrlBuilder {
        this.options.hash = hash;
        return this;
    }

    public WithQuery (name: string, value: any): UrlBuilder {
        if (this.options.queryParams == null) {
            this.options.queryParams = {};
        }
        this.options.queryParams[name] = value;
        return this;
    }

    public Build (): string {
        return buildUrl(this.baseUrl, this.options);
    }
}
