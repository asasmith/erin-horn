"use client"
import Link from 'next/link';

interface ServiceItemProps {
    data: {
        description: string;
        duration: string;
        name: string;
        price: string;
        slug: string
    }
}

export const ServiceItem = ({ data }: ServiceItemProps): React.JSX.Element => {
    const { description, duration, price, name, slug } = data;
    return (
        <article className="flex items-center justify-between font-sans shadow-sm shadow-gray-400 p-8 mb-2">
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
}
