import Image from 'next/image';
import Logo from '../../../public/logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="container mx-auto pb-4 font-sans">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <Image src={Logo} alt="Blissful Balance Logo" className="w-48 mx-auto md:mx-0" />
                    <div className="mt-2 flex items-center justify-center md:justify-start gap-2">
                        <FaEnvelope className="text-primary" />
                        <a href="mailto:blissful@balance.com" className="text-primary">blissful@balance.com</a>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <FaPhone className="text-primary" />
                        <a href="tel:443-802-0509" className="text-primary">443-802-0509</a>
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-secondary">Follow Us</h3>
                    <div className="flex justify-center md:justify-start gap-4 mt-2">
                        <a href="#" className="text-primary hover:text-blue-600" aria-label="Facebook">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-primary hover:text-pink-500" aria-label="Instagram">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-primary hover:text-blue-400" aria-label="Twitter">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold text-secondary">Business Hours</h3>
                    <p className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-sm">Sunday: Closed</p>
                </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">© {new Date().getFullYear()} Blissful Balance. All rights reserved.</p>
        </footer>
    );
};

