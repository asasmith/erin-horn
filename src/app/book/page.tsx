import Image from "next/image";
import Link from 'next/link';
import img from '../../../public/toa-heftiba-hBLf2nvp-Yc-unsplash.jpg';

const services = [
    {
        name: 'Deep Tissue',
        description: `A deep tissue massage uses slow, firm pressure to target deep muscle layers, relieving chronic pain, tension, and knots. It’s ideal for injury recovery, improving flexibility, and reducing stress. While intense, it should never be painful. Stay hydrated after your session for the best results.`,
        price: '$90',
        duration: '60 minutes',
        slug: 'deep-tissue',
    },
    {
        name: 'Swedish Massage',
        description: `A Swedish massage uses gentle, flowing strokes to promote relaxation, improve circulation, and ease muscle tension. Perfect for stress relief, improving flexibility, and boosting overall well-being, this soothing massage helps you unwind while enhancing your body's natural healing process.`,
        price: '$80',
        duration: '60 minutes',
        slug: 'swedish',
    },
    {
        name: 'Prenatal Massage',
        description: `A prenatal massage is designed to provide gentle relief from pregnancy-related aches, tension, and swelling. Using safe, soothing techniques, it helps promote relaxation, improve circulation, and reduce discomfort while supporting both you and your baby’s well-being.`,
        price: '$100',
        duration: '60 minutes',
        slug: 'prenatal',
    },
    {
        name: 'Sports Massage',
        description: `A sports massage uses targeted techniques to enhance performance, speed up recovery, and prevent injuries. Ideal for athletes and active individuals, this massage helps reduce muscle tension, improve flexibility, and boost circulation, keeping you at the top of your game.`,
        price: '$90',
        duration: '60 minutes',
        slug: 'sports',
    },
    {
        name: 'Cupping',
        description: `Cupping therapy uses suction cups to increase circulation, relieve muscle tension, and promote healing. This ancient technique helps reduce pain, improve mobility, and release deep-seated tightness, making it a great complement to massage therapy.`,
        price: '$50',
        duration: '30 minutes',
        slug: 'cupping',
    },
]

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
                            const { description, duration, price, name, slug } = service;
                            return (
                                <article className="flex items-center justify-between font-sans shadow-sm shadow-gray-400 p-8 mb-2" key={slug}>
                                    <div className="w-1/2">
                                        <p className="text-2xl mb-2">{name}</p>
                                        <p className="text-sm mb-1">{price}</p>
                                        <p className="text-sm mb-1">{duration}</p>
                                        <p className="text-xs">{description}</p>
                                    </div>
                                    <Link
                                        href={`/book/${slug}`}
                                        className="text-white bg-primary p-2 rounded uppercase"
                                    >
                                        book now
                                    </Link>
                                </article>
                            )
                        })
                    }

                </div>
            </div>
        </div >
    )
}
