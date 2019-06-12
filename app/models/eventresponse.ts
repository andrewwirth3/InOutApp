import { Event, User } from '.';

export default interface EventResponse {
    id: number;
    eventId: number;
    event: Event;
    username: string;
    user: User;
    value: boolean;
}
