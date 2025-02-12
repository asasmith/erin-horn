import Image from "next/image";
import img from '../../../public/toa-heftiba-hBLf2nvp-Yc-unsplash.jpg';
import { ServiceItem } from './components/ServiceItem'
import { services } from './data/services'

export default function Book() {
    return (
        <div className="min-h-full">
            <div className="relative">
                <Image src={img} alt="massage" className="max-h-[65vh]" placeholder="blur" />
                <h1 className="text-5xl font-bold font-serif text-secondary capitalize absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">book an appointment</h1>
            </div>
            <div className="container mx-auto max-w-3/4 my-20">
                <div className="p-4">
                    <div className="w-1/2 mx-auto mb-14">
                        <h2 className="capitalize text-3xl text-center font-sans">schedule an appointment</h2>
                    </div>
                    {
                        services.map(service => {
                            const { slug } = service;
                            return (
                                <ServiceItem data={service}  key={slug}/>
                            )
                        })
                    }

                </div>
            </div>
        </div >
    )
}
