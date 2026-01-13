import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Globe, Heart, Users } from 'lucide-react';

export default function AboutPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            {/* Header */}
            <div style={{ background: '#0f172a', padding: '10rem 0 6rem', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>About AirLink</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto' }}>
                        Connecting Somalia to the world through premium travel, tourism, and cargo services.
                    </p>
                </div>
            </div>

            <div className="container" style={{ padding: '6rem 1.5rem', flex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', marginBottom: '8rem' }}>
                    <div>
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Our Mission</h2>
                        <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            At AirLink, we believe travel should be seamless, cargo should be reliable, and tourism should be inspiring. Our mission is to bridge cultures and markets by providing world-class logistical and travel solutions tailored to the needs of our community.
                        </p>
                        <p style={{ color: '#666', lineHeight: 1.8, fontSize: '1.1rem' }}>
                            Founded in Mogadishu, we have grown into a multi-faceted agency serving thousands of travelers and businesses across Africa and beyond.
                        </p>
                    </div>
                    <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>10k+</div>
                                <div style={{ color: '#64748b', fontWeight: 600 }}>Happy Clients</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>50+</div>
                                <div style={{ color: '#64748b', fontWeight: 600 }}>Destinations</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>15+</div>
                                <div style={{ color: '#64748b', fontWeight: 600 }}>Major Airlines</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>24/7</div>
                                <div style={{ color: '#64748b', fontWeight: 600 }}>Expert Support</div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>Our Core Values</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <div style={{ color: 'hsl(var(--primary))', marginBottom: '1.5rem' }}><Award size={48} style={{ margin: 'auto' }} /></div>
                        <h3>Excellence</h3>
                        <p style={{ color: '#666' }}>We strive for the highest standards in everything we do.</p>
                    </div>
                    <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <div style={{ color: 'hsl(var(--primary))', marginBottom: '1.5rem' }}><Users size={48} style={{ margin: 'auto' }} /></div>
                        <h3>Customer First</h3>
                        <p style={{ color: '#666' }}>Your comfort and satisfaction are our top priorities.</p>
                    </div>
                    <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <div style={{ color: 'hsl(var(--primary))', marginBottom: '1.5rem' }}><Globe size={48} style={{ margin: 'auto' }} /></div>
                        <h3>Integrity</h3>
                        <p style={{ color: '#666' }}>Honest advice and transparent pricing, every single time.</p>
                    </div>
                    <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <div style={{ color: 'hsl(var(--primary))', marginBottom: '1.5rem' }}><Heart size={48} style={{ margin: 'auto' }} /></div>
                        <h3>Passion</h3>
                        <p style={{ color: '#666' }}>We love what we do, and it shows in our service.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
