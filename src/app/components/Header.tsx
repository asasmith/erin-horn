'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/logo.png';

export const Header = () => {
    const pathname = usePathname();
    const isAboutPath = pathname === '/about' ? 'underline' : '';

    return (
        <header className="py-4 flex justify-between items-center container mx-auto">
            <Link href="/" className="">
                <Image src={Logo} alt="Blissful Balance Logo" className="w-32" />
            </Link>
            <div className="flex items-center justify-between w-80">
                <Link href="/about" className={`mx-2 font-sans ${isAboutPath ? 'underline' : ''}`}>About</Link>
                <Link href="/book" className="px-4 py-2 bg-primary font-sans text-white rounded">
                    Book an Appointment
                </Link>
            </div>
        </header>
    )
}
