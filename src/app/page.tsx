import Image from "next/image";
import Link from 'next/link';
import img1 from '../../public/mat-kilkeary-yBLLzNcA6GU-unsplash.jpg'
import img2 from '../../public/simon-humler--AakIaAPV0w-unsplash.jpg'
import { HiArrowLongRight } from "react-icons/hi2"

export default function Home() {
    return (
        <main className="text-center container mx-auto">
            <h1 className="text-5xl font-serif text-secondary w-1/2 mx-auto mb-56 mt-40">
                A personalized massage therapy practice specializing in advanced bodywork techniques.
            </h1>
            <div className="grid grid-cols-24 grid-rows-16 gap-3">
                <div className="col-start-1 col-span-10 row-start-1 row-end-12">
                    <Image src={img2} alt="massage" placeholder="blur" />
                </div>
                <Link
                    href="/services"
                    className="flex items-center col-start-[15] col-span-10 row-start-2 transition-colors text-secondary hover:text-primary duration:500 ease-in group"
                >
                    <span className="text-5xl font-serif capitalize">explore services</span>
                    <HiArrowLongRight className="fill-secondary transition-all group-hover:fill-primary group-hover:translate-x-2 w-10 h-10 ml-4 mt-4" />
                </Link>
                <div className="col-start-[15] col-span-10 row-start-4 row-end-[16]">
                    <Image src={img1} alt="massage" placeholder="blur" />
                </div>
                <Link
                    href="/services"
                    className="flex items-center col-start-1 col-span-10 row-start-13 transition-colors text-secondary hover:text-primary duration:500 ease-in group"
                >
                    <span className="text-5xl font-serif capitalize">explore services</span>
                    <HiArrowLongRight className="fill-secondary transition-all group-hover:fill-primary group-hover:translate-x-2 w-10 h-10 ml-4 mt-4" />
                </Link>
            </div>
        </main>
    );
}
