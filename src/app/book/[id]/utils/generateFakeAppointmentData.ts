import { AppointmentDay, Appointment } from "../types";

export const generateFakeAppointments = () => {
    const appointments: AppointmentDay[] = [];
    const now: Date = new Date();

    for (let i = 0; i < 5; i++) {
        const date = new Date();
        date.setDate(now.getDate() + i);

        const month: string = date.toLocaleDateString('en-us', { month: 'short' });
        const day: number = date.getDate();
        const dayOfWeek: string = date.toLocaleTimeString('en-us', { weekday: 'long' })

        const times: Appointment[] = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"].map((time) => {
            const [hour, minute] = time.split(":").map(Number);
            const timeDate: Date = new Date();
            timeDate.setHours(hour, minute);

            return {
                time: timeDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true }),
                available: Math.random() > 0.3,
            };
        });

        appointments.push({
            month,
            day,
            dayOfWeek,
            slots: times,
        });
    }

    return appointments;
};
