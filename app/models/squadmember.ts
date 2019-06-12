import { Squad, User } from '.';

export default interface SquadMember {
    id: number;
    squadId: number;
    series: Squad;
    username: string;
    user: User;
    isActive: boolean;
    sequence: number;
}
