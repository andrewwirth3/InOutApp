import { EventResponse, SquadMember } from '.';

export default interface User {
    username: string;
    responses: EventResponse[];
    memberships: SquadMember[];
    name: string;
    userId: string;
    email: string;
    phone: string;
    isActive: boolean;
}
