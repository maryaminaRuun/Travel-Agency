import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from 'react';

export function generateStaticParams() {
    return [
        { slug: 'translation' },
        { slug: 'meet-and-greet' },
        { slug: 'real-estate' },
    ];
}

export default async function OtherServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div className="container" style={{ padding: '8rem 1.5rem 4rem', flex: 1 }}>
                <h1 style={{ marginBottom: '1rem', fontSize: '3rem' }}>{title}</h1>
                <p className="lead" style={{ fontSize: '1.25rem', opacity: 0.7, marginBottom: '2rem' }}>
                    Professional {title.toLowerCase()} tailored to your specifications.
                </p>

                <div className="card glass">
                    <h2>Service Request</h2>
                    <p style={{ margin: '1rem 0' }}>
                        We are currently expanding our digital capabilities for {title}.
                        Please contact our concierges for immediate support.
                    </p>
                    <button className="btn btn-primary">Request Quote</button>
                </div>
            </div>
            <Footer />
        </main>
    );
}
