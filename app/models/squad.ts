import { SquadMember, Series } from '.';

export default interface Squad {
    id: number;
    events: SquadMember[];
    series: Series[];
    isActive: boolean;
    name: string;
}
