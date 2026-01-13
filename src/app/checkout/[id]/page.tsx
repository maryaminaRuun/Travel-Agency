"use client";

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User, ShieldCheck, CreditCard, ChevronLeft, Loader2, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
    const params = useParams();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate booking process
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar />
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem' }}>
                    <div className="card" style={{ maxWidth: '500px', textAlign: 'center', padding: '4rem' }}>
                        <div style={{ color: 'hsl(var(--success))', marginBottom: '1.5rem' }}>
                            <CheckCircle size={80} style={{ margin: 'auto' }} />
                        </div>
                        <h1 style={{ marginBottom: '1rem' }}>Booking Confirmed!</h1>
                        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
                            Your flight has been successfully booked. You can view your itinerary in your dashboard.
                        </p>
                        <button className="btn btn-primary" onClick={() => router.push('/applicant')} style={{ width: '100%' }}>
                            Go to Dashboard
                        </button>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main style={{ background: '#f5f7fa', minHeight: '100vh' }}>
            <Navbar />

            <div className="container" style={{ padding: '6rem 1.5rem 4rem' }}>
                <button
                    onClick={() => router.back()}
                    style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 600, color: 'hsl(var(--primary))' }}
                >
                    <ChevronLeft size={20} /> Back to Results
                </button>

                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                    {/* Left Column: Form */}
                    <div>
                        <div className="card" style={{ marginBottom: '2rem' }}>
                            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <User size={24} color="hsl(var(--primary))" /> Passenger Details
                            </h2>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>First Name (as in passport)</label>
                                        <input type="text" className="input" placeholder="John" required />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Last Name (as in passport)</label>
                                        <input type="text" className="input" placeholder="Doe" required />
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Passport Number</label>
                                        <input type="text" className="input" placeholder="A1234567" required />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Nationality</label>
                                        <select className="input">
                                            <option>Somalia</option>
                                            <option>United States</option>
                                            <option>United Kingdom</option>
                                            <option>United Arab Emirates</option>
                                        </select>
                                    </div>
                                </div>

                                <div style={{ marginTop: '1rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <CreditCard size={20} /> Payment Method
                                    </h3>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1.5rem' }}>Your payment is secured by industry-standard encryption.</p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ padding: '1rem', border: '1px solid hsl(var(--primary))', background: 'white', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontWeight: 600 }}>Credit / Debit Card</span>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                <div style={{ width: '35px', height: '22px', background: '#eee', borderRadius: '2px' }} />
                                                <div style={{ width: '35px', height: '22px', background: '#eee', borderRadius: '2px' }} />
                                            </div>
                                        </div>
                                        <input type="text" className="input" placeholder="Card Number" />
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                            <input type="text" className="input" placeholder="MM/YY" />
                                            <input type="text" className="input" placeholder="CVC" />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ height: '60px', fontSize: '1.1rem', justifyContent: 'center' }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : 'Confirm Booking'}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Summary */}
                    <div>
                        <div className="card" style={{ position: 'sticky', top: '6rem' }}>
                            <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>Price Details</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Adult (1x)</span>
                                    <strong>$450.00</strong>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Taxes & Fees</span>
                                    <strong>$35.00</strong>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '2px solid #eee' }}>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>Total Price</span>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>$485.00</span>
                                </div>
                            </div>
                            <div style={{ marginTop: '2rem', padding: '1rem', background: '#fff9eb', borderRadius: '8px', border: '1px solid #ffecb3', display: 'flex', gap: '0.75rem' }}>
                                <ShieldCheck size={20} color="#b45309" />
                                <div>
                                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#b45309' }}>Free Cancellation</p>
                                    <p style={{ fontSize: '0.75rem', color: '#b45309', opacity: 0.8 }}>Before Jan 14, 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
