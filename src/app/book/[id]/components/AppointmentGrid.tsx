'use client'
import { useCallback, useEffect, useState } from 'react';
import { AppointmentDayHeading, AppointmentSlot } from '.';
import { generateFakeAppointments } from '../utils/generateFakeAppointmentData';
import { AppointmentDay } from '../types';

export const AppointmentGrid = ({ title }: { title: string }) => {
    const [appointments, setAppointments] = useState<AppointmentDay[]>([]);
    const [isBooked, setIsBooked] = useState(false);

    useEffect(() => {
        setAppointments(generateFakeAppointments);
    },[])

    const handleBook = useCallback(() => {
        setIsBooked(true)
    }, [])

    if (isBooked) {
        return (
            <div className="w-3/4 mx-auto">
                <h1 className="text-secondary text-5xl text-center font-serif mb-24">Thank you for booking!</h1>
            </div>
        )
    }

    return (
        <div className="w-3/4 mx-auto">
            <h1 className="text-secondary text-5xl text-center font-serif mb-24">{title}</h1>

            <div className="grid grid-cols-5 gap-4 border border-gray-400 p-5">
                {
                    appointments.map((app) => {
                        const { dayOfWeek } = app;
                        return (
                            <AppointmentDayHeading data={app} key={dayOfWeek} />
                        )
                    })
                }
                {
                    appointments.map((appointment) => {
                        const { dayOfWeek } = appointment;

                        return (
                            <AppointmentSlot data={appointment} handleBook={handleBook} key={dayOfWeek} />
                        )
                    })
                }
            </div>
        </div>
    )
}  
