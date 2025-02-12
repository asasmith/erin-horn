'use client'

import { AppointmentDay } from "../types";

export const AppointmentSlot = ({ data }: { data: AppointmentDay }) => {
    const { dayOfWeek, slots }: AppointmentDay = data;
    return (
        <div className="flex flex-col gap-2 items-center">
            {
                slots.map((slot) => {
                    const { available, time } = slot;

                    if (available) {
                        return (
                            <button
                                key={`${dayOfWeek}-${time}`}
                                className={"p-2 text-center w-1/2 shadow-sm shadow-gray-400 "}
                            >
                                {time}
                            </button>
                        )
                    }
                })
            }
        </div>
    )
}
