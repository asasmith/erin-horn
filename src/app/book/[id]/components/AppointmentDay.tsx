'use client'

import { AppointmentDay } from "../types";

export const AppointmentDayHeading = ({ data }: { data: AppointmentDay }) => {
    const { day, dayOfWeek, month } = data;
    return (
        <div className="text-center">
            <h2>{dayOfWeek.split(' ')[0]}</h2>
            <p>{month} {day}</p>
        </div>
    )
}
