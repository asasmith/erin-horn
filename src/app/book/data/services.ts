interface Service {
    name: string;
    description: string;
    price: string;
    duration: string;
    slug: string;
}

export const services: Service[] =
    [
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
