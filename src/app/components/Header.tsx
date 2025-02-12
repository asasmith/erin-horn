'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
    const pathname = usePathname();
    const isAboutPath = pathname === '/about' ? 'underline' : '';

    return (
        <header className="py-4 flex justify-between container mx-auto">
            <nav className="flex items-center text-offBlack">
                <Link href="/about" className={`mx-2 font-sans ${isAboutPath ? 'underline' : ''}`}>About</Link>
            </nav>
            <Link href="/" className="font-serif font-semibold text-4xl text-secondary capitalize">blissful balance</Link>
            <Link href="/book">
                <button className="px-4 py-2 bg-primary font-sans text-white rounded">Book an Appointment</button>
            </Link>
        </header>
    )
}
