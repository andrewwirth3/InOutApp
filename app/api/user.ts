import BaseApi from './base';

export default class UserApi extends BaseApi
{
    /**
     *
     */
    constructor() {
        super();
        console.log('UserApi');
        console.log(this.url('test'));
    }
}