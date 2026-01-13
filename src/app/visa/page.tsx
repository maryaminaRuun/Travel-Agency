"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, FileText, CheckCircle, Search, Globe, ShieldCheck, Loader2, ArrowRight } from 'lucide-react';

export default function VisaPage() {
    const [trackingId, setTrackingId] = useState('');
    const [isTracking, setIsTracking] = useState(false);
    const [trackingResult, setTrackingResult] = useState<any>(null);

    const handleTrack = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!trackingId) return;
        setIsTracking(true);
        setTrackingResult(null);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsTracking(false);
        setTrackingResult({
            id: trackingId,
            status: 'In Progress',
            location: 'Embassy Verification',
            updateDate: 'Jan 12, 2026',
            steps: [
                { name: 'Document Received', done: true },
                { name: 'Expert Verification', done: true },
                { name: 'Embassy Submission', done: true },
                { name: 'Final Approval', done: false },
            ]
        });
    };

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
            <Navbar />

            {/* Hero Section */}
            <div style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: 'white', padding: '10rem 1.5rem 6rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '1.5rem', fontSize: '3.5rem', fontWeight: 800 }}>Visa Services Simplified</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Expert assistance for Schengen, USA, UK, and Asian visas. 98% success rate on all applications.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <ShieldCheck color="hsl(var(--primary))" />
                            <span>Authorized Provider</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Globe color="hsl(var(--primary))" />
                            <span>150+ Destinations</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Scale color="hsl(var(--primary))" />
                            <span>Expert Legal Support</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 1.5rem', flex: 1, marginTop: '-4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', marginBottom: '4rem' }}>

                    {/* Application Form */}
                    <div className="card" style={{ padding: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ marginBottom: '2rem', fontSize: '1.75rem' }}>Check Visa Requirements</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Citizen of</label>
                                    <select className="input" style={{ width: '100%' }}>
                                        <option>Somalia</option>
                                        <option>USA</option>
                                        <option>Kenya</option>
                                        <option>Turkey</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Travelling to</label>
                                    <select className="input" style={{ width: '100%' }}>
                                        <option>France (Schengen)</option>
                                        <option>USA (B1/B2)</option>
                                        <option>Turkey (E-visa)</option>
                                        <option>China</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #0ea5e9' }}>
                                <h4 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <FileText size={18} /> Required Documents
                                </h4>
                                <ul style={{ fontSize: '0.9rem', opacity: 0.8, paddingLeft: '1.5rem' }}>
                                    <li>Valid Passport (min 6 months)</li>
                                    <li>2 Passport Size Photos</li>
                                    <li>Flight & Hotel Bookings</li>
                                    <li>Bank Statements (last 3 months)</li>
                                </ul>
                            </div>

                            <button className="btn btn-primary" style={{ width: '100%', height: '55px', justifyContent: 'center', fontSize: '1.1rem' }}>
                                Start Online Application <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                            </button>
                        </form>
                    </div>

                    {/* Tracking Section */}
                    <div>
                        <div className="card" style={{ background: 'hsl(var(--primary))', color: 'white', padding: '2.5rem', border: 'none' }}>
                            <h3 style={{ marginBottom: '1.5rem', color: 'white' }}>Track Application</h3>
                            <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Enter your Reference Number to check real-time status.</p>
                            <form onSubmit={handleTrack} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <input
                                    type="text"
                                    placeholder="Reference (e.g. V-1029)"
                                    className="input"
                                    style={{ background: 'rgba(255,255,255,1)', color: '#333', border: 'none' }}
                                    value={trackingId}
                                    onChange={(e) => setTrackingId(e.target.value)}
                                />
                                <button className="btn" style={{ background: 'white', color: 'hsl(var(--primary))', width: '100%', justifyContent: 'center', fontWeight: 700 }} disabled={isTracking}>
                                    {isTracking ? <Loader2 className="animate-spin" /> : 'Track Now'}
                                </button>
                            </form>
                        </div>

                        {trackingResult && (
                            <div className="card" style={{ marginTop: '1.5rem', padding: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <h4 style={{ fontWeight: 800 }}>Ref: {trackingResult.id}</h4>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>Updated: {trackingResult.updateDate}</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {trackingResult.steps.map((step: any, i: number) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: step.done ? 'hsl(var(--success))' : '#e2e8f0',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white'
                                            }}>
                                                {step.done ? <CheckCircle size={14} /> : i + 1}
                                            </div>
                                            <span style={{ fontSize: '0.9rem', fontWeight: step.done ? 600 : 400, opacity: step.done ? 1 : 0.4 }}>{step.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '3rem' }}>Our Expert Guidance Process</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#f0f9ff', color: 'hsl(var(--primary))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FileText size={32} />
                            </div>
                            <h3>1. Document Collection</h3>
                            <p style={{ opacity: 0.6 }}>Our team provides a detailed checklist tailored to your specific profile and destination.</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#fff7ed', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Scale size={32} />
                            </div>
                            <h3>2. Expert Verification</h3>
                            <p style={{ opacity: 0.6 }}>Every document is meticulously checked by retired consular officers to ensure zero errors.</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#ecfdf5', color: 'hsl(var(--success))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CheckCircle size={32} />
                            </div>
                            <h3>3. Visa Approval</h3>
                            <p style={{ opacity: 0.6 }}>Once submission is done, we track the status and notify you the moment your visa is ready.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
