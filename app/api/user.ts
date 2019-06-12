import UrlBuilder from './urlBuilder';
import { User } from '../models';

export default class UserApi {
    /**
     *
     */
    constructor () {
        const test: string = new UrlBuilder().WithPath('test').Build();
        console.debug('UserApi');
        console.debug(test);

        const json = {
            username: 'test',
            responses: [],
            membershipts: [],
            name: 'Test User',
            userId: '12345-123123',
            email: null,
            phone: null,
            isActive: true
        };
        const user: User = JSON.parse(JSON.stringify(json));
        console.debug('User');
        console.debug(user);
    }
}
