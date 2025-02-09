import Image from "next/image";
import Link from 'next/link';
import img from '../../../public/toa-heftiba-hBLf2nvp-Yc-unsplash.jpg';

export default function Services() {
    return (
        <div>
            <Image src={img} alt="massage" className="max-h-[65vh] object-cover" />
            <div className="container mx-auto mt-20">
                <h1 className="text-5xl text-center font-serif text-secondary capitalize mb-24">our services</h1>
                <article className="flex justify-between items-center w-10/12 mx-auto pb-24">
                    <div className="w-3/5">
                        <h2 className="text-4xl text-secondary font-serif mb-8">Deep Tissue Massage</h2>
                        <p>
                            A deep tissue massage uses slow, firm pressure to target deep muscle layers,
                            relieving chronic pain, tension, and knots.
                            It’s ideal for injury recovery, improving flexibility, and reducing stress.
                            While intense, it should never be painful. Stay hydrated after your session for the best results.
                        </p>
                    </div>
                    <Link href="/book">
                        <button className="px-4 py-2 bg-primary font-sans text-white rounded">Book an Appointment</button>
                    </Link>
                </article>

                <article className="flex justify-between items-center w-10/12 mx-auto pb-24">
                    <div className="w-3/5">
                        <h2 className="text-4xl text-secondary font-serif mb-8">Swedish Massage</h2>
                        <p>
                            A Swedish massage uses gentle, flowing strokes to promote relaxation, improve circulation,
                            and ease muscle tension. Perfect for stress relief, improving flexibility, and boosting overall well-being,
                            this soothing massage helps you unwind while enhancing your body's natural healing process.
                        </p>
                    </div>
                    <Link href="/book">
                        <button className="px-4 py-2 bg-primary font-sans text-white rounded">Book an Appointment</button>
                    </Link>
                </article>

                <article className="flex justify-between items-center w-10/12 mx-auto pb-24">
                    <div className="w-3/5">
                        <h2 className="text-4xl text-secondary font-serif mb-8">Prenatal Massage</h2>
                        <p>
                            A prenatal massage is designed to provide gentle relief from pregnancy-related aches, tension, and swelling. Using safe, soothing techniques, it helps promote relaxation, improve circulation, and reduce discomfort while supporting both you and your baby’s well-being.
                        </p>
                    </div>
                    <Link href="/book">
                        <button className="px-4 py-2 bg-primary font-sans text-white rounded">Book an Appointment</button>
                    </Link>
                </article>

                <article className="flex justify-between items-center w-10/12 mx-auto pb-24">
                    <div className="w-3/5">
                        <h2 className="text-4xl text-secondary font-serif mb-8">Sports Massage</h2>
                        <p>
                            A prenatal massage is designed to provide gentle relief from pregnancy-related aches, tension, and swelling. Using safe, soothing techniques, it helps promote relaxation, improve circulation, and reduce discomfort while supporting both you and your baby’s well-being.
                        </p>
                    </div>
                    <Link href="/book">
                        <button className="px-4 py-2 bg-primary font-sans text-white rounded">Book an Appointment</button>
                    </Link>
                </article>


                <article className="flex justify-between items-center w-10/12 mx-auto pb-24">
                    <div className="w-3/5">
                        <h2 className="text-4xl text-secondary font-serif mb-8">Cupping</h2>
                        <p>
                            Cupping therapy uses suction cups to increase circulation, relieve muscle tension, and promote healing. This ancient technique helps reduce pain, improve mobility, and release deep-seated tightness, making it a great complement to massage therapy.
                        </p>
                    </div>
                    <Link href="/book">
                        <button className="px-4 py-2 bg-primary font-sans text-white rounded">Book an Appointment</button>
                    </Link>
                </article>
            </div>
        </div>
    )

}
