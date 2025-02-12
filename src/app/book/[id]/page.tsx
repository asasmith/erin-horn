import Image from "next/image";
import img from '../../../../public/toa-heftiba-hBLf2nvp-Yc-unsplash.jpg';
import { notFound } from "next/navigation";
import { generateFakeAppointments } from './utils/generateFakeAppointmentData';
import { services } from '../data/services';
import { AppointmentDayHeading, AppointmentSlot } from './components'

export async function generateStaticParams() {
    return services.map(service => ({ id: service.slug }))
}

interface ServicePageProps {
    params: Promise<{ id: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { id } = await params;
    const appointments = generateFakeAppointments();
    const service = services.find(service => service.slug === id)

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
                                <AppointmentSlot data={appointment} key={dayOfWeek} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
