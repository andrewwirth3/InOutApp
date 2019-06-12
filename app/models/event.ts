import { EventResponse, Series } from '.';

export default interface Event {
    id: number;
    seriesId: number;
    series: Series;
    responses: EventResponse[];
    isActive: boolean;
    description: string;
    location: string;
    start: Date;
    end: Date;
    min: number;
    max: number;
}
