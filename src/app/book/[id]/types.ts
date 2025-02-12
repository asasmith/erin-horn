export interface Appointment {
    time: string;
    available: boolean;
}

export interface AppointmentDay {
    month: string;
    day: number;
    dayOfWeek: string;
    slots: Appointment[];
}
