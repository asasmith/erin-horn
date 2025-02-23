import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Header, Footer } from "./components";
import "./globals.css";

const playfairDisplay = Playfair_Display({
    preload: false,
    variable: "--font-playfair-display",
})

const montserrat = Montserrat({
    preload: false,
    variable: "--font-montserrat",
})

export const metadata: Metadata = {
    title: 'Blissful Balance',
    description: 'A personalized massage therapy practice specializing in advanced bodywork techniques.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${playfairDisplay.variable} ${montserrat.variable} antialiased`}
            >
                <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col justify-between">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
