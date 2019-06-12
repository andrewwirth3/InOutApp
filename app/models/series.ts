import { Event, Squad } from '.';

export default interface Series {
    id: number;
    events: Event[];
    squadId: number;
    squad: Squad;
    isRecurring: boolean;
    isActive: boolean;
    repeatCount: number;
    repeatType: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR';
    endDate: Date;
    endCount: number;
    repeatSunday: boolean;
    repeatMonday: boolean;
    repeatTuesday: boolean;
    repeatWednesday: boolean;
    repeatThursday: boolean;
    repeatFriday: boolean;
    repeatSaturday: boolean;
    // first, last, # ('8' would equal 8th day of the month)
    repeatMonthly: string;
}
