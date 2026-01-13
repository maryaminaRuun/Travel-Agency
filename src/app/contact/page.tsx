import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div style={{ flex: 1 }}>
                <div style={{ background: '#f8fafc', padding: '10rem 0 4rem', borderBottom: '1px solid #e2e8f0' }}>
                    <div className="container">
                        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Contact Us</h1>
                        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>We're here to help with your travel and logistics needs.</p>
                    </div>
                </div>

                <div className="container" style={{ padding: '6rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
                    {/* Contact Info */}
                    <div>
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Get in Touch</h3>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ color: 'hsl(var(--primary))' }}><Phone size={24} /></div>
                                <div>
                                    <p style={{ fontWeight: 600 }}>Phone</p>
                                    <p style={{ color: '#666' }}>+252 61 646 4022</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ color: 'hsl(var(--primary))' }}><Mail size={24} /></div>
                                <div>
                                    <p style={{ fontWeight: 600 }}>Email</p>
                                    <p style={{ color: '#666' }}>info@airlinktravel.so</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ color: 'hsl(var(--primary))' }}><MapPin size={24} /></div>
                                <div>
                                    <p style={{ fontWeight: 600 }}>Office</p>
                                    <p style={{ color: '#666' }}>Mogadishu, Somalia</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 style={{ marginBottom: '1rem' }}>Business Hours</h3>
                            <p style={{ color: '#666', marginBottom: '0.5rem' }}>24/7</p>
                            <p style={{ color: '#666' }}>Sat: 10:00 AM - 4:00 PM</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="card" style={{ padding: '3rem' }}>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
