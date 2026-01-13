import Navbar from "@/components/Navbar";
import React from 'react';

// This is a generic page handler for services
export function generateStaticParams() {
    return [
        { slug: 'flights' },
        { slug: 'visa' }, // Singular as per link
        { slug: 'tours' },
        { slug: 'cargo' },
        { slug: 'hotels' },
        { slug: 'cars' },
    ];
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;

    const validServices = ['flights', 'visa', 'tours', 'cargo', 'hotels', 'cars'];

    if (!validServices.includes(slug)) {
        // In a real app we'd use notFound() or let it fall through, but for demo we show generic
    }

    const title = slug.charAt(0).toUpperCase() + slug.slice(1) + (slug === 'visa' ? '' : ''); // Simple capitalization

    return (
        <main>
            <Navbar />
            <div className="container" style={{ padding: '8rem 1.5rem 4rem' }}>
                <h1 style={{ marginBottom: '1rem', fontSize: '3rem' }}>{title} Services</h1>
                <p className="lead" style={{ fontSize: '1.25rem', opacity: 0.7, marginBottom: '2rem' }}>
                    Top-tier {slug} solutions tailored for your needs.
                </p>

                <div className="card glass">
                    <h2>Start your booking</h2>
                    <p style={{ margin: '1rem 0' }}>
                        Our automated {slug} system is currently being integrated.
                        Please contact an agent for immediate assistance.
                    </p>
                    <button className="btn btn-primary">Contact Agent</button>
                </div>
            </div>
        </main>
    );
}
