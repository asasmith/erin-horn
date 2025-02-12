import Image from "next/image";
import img from '../../../../public/toa-heftiba-hBLf2nvp-Yc-unsplash.jpg';
import { notFound } from "next/navigation";

const services =
    [
        {
            name: 'Deep Tissue',
            price: '$90',
            duration: '60 minutes',
            id: 'deep-tissue',
        },
        {
            name: 'Swedish Massage',
            price: '$80',
            duration: '60 minutes',
            id: 'swedish',
        },
        {
            name: 'Prenatal Massage',
            price: '$100',
            duration: '60 minutes',
            id: 'prenatal',
        },
        {
            name: 'Sports Massage',
            price: '$90',
            duration: '60 minutes',
            id: 'sports',
        },
        {
            name: 'Cupping',
            price: '$50',
            duration: '30 minutes',
            id: 'cupping',
        },
    ]

export async function generateStaticParams() {
    return services.map(service => ({ id: service.id }))
}

interface ServicePageProps {
    params: Promise<{ id: string }>;
}

// Utility function to generate fake appointments
const generateFakeAppointments = () => {
    const appointments = [];
    const now = new Date();

    for (let i = 0; i < 5; i++) {
        const date = new Date();
        date.setDate(now.getDate() + i); // Add i days to today's date

        // const formattedDate = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
        const month = date.toLocaleDateString('en-us', { month: 'short' });
        const day = date.getDate();
        const dayOfWeek = date.toLocaleTimeString('en-us', { weekday: 'long' })

        // Generate random appointment times (e.g., 9:00 AM, 11:30 AM, 2:00 PM)
        const times = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"].map((time) => {
            const [hour, minute] = time.split(":").map(Number);
            const timeDate = new Date();
            timeDate.setHours(hour, minute);

            return {
                time: timeDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true }),
                available: Math.random() > 0.3, // 70% chance available
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

export default async function ServicePage({ params }: ServicePageProps) {
    const { id } = await params;
    const fakeAppointments = generateFakeAppointments();
    const service = services.find(service => service.id === id)

    if (!service) return notFound;

    return (
        <div className="min-h-full pb-24">
            <div className="relative mb-24">
                <Image src={img} alt="massage" className="max-h-[45vh] object-cover" placeholder="blur" />
                <h1 className="text-5xl font-bold font-serif text-secondary capitalize absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">book an appointment</h1>
            </div>
            <div className="w-3/4 mx-auto">
                <h1 className="text-secondary text-5xl text-center font-serif mb-24">{service.name}</h1>
                <div className="grid grid-cols-5 gap-4 border border-gray-400 p-5">
                    {
                        fakeAppointments.map((app) => {
                            const { day, dayOfWeek, month } = app;

                            return (

                                <div className="text-center" key={dayOfWeek}>
                                    <h2>{dayOfWeek.split(' ')[0]}</h2>
                                    <p>{month} {day}</p>
                                </div>
                            )
                        })
                    }
                    {
                        fakeAppointments.map((appointment) => {
                            const { dayOfWeek, slots } = appointment;
                            return (
                                <div key={dayOfWeek} className="flex flex-col gap-2 items-center">
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
                        })
                    }
                </div>
            </div>
        </div>
    );
}
