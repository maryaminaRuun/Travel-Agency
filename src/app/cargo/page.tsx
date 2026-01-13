"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, Ship, Plane, Search, Package, MapPin, Globe, Loader2, ArrowRightLeft, ShieldCheck } from 'lucide-react';

export default function CargoPage() {
    const [trackingId, setTrackingId] = useState('');
    const [isTracking, setIsTracking] = useState(false);
    const [trackData, setTrackData] = useState<any>(null);

    const handleTrack = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!trackingId) return;
        setIsTracking(true);
        setTrackData(null);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsTracking(false);
        setTrackData({
            id: trackingId,
            origin: 'Hong Kong (HKG)',
            destination: 'Mogadishu (MGQ)',
            status: 'In Transit',
            eta: 'Jan 18, 2026',
            history: [
                { time: 'Jan 11, 2026 10:30 AM', location: 'Hong Kong', msg: 'Shipment picked up' },
                { time: 'Jan 12, 2026 02:15 PM', location: 'Dubai Hub', msg: 'Arrived at sorting facility' },
                { time: 'Jan 13, 2026 09:00 AM', location: 'Dubai Hub', msg: 'Departed sorting facility' },
            ]
        });
    };

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            {/* Hero */}
            <div style={{ background: '#0f172a', color: 'white', padding: '10rem 1.5rem 6rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: '10%', left: '5%', color: 'white' }}><Truck size={100} /></div>
                    <div style={{ position: 'absolute', bottom: '10%', right: '5%', color: 'white' }}><Plane size={100} /></div>
                </div>
                <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Global Cargo & Logistics</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Providing reliable, fast, and secure freight solutions across the globe. Air, Sea, and Land logistics tailored for your business.
                    </p>

                    {/* Tracking Bar */}
                    <div className="card" style={{ maxWidth: '700px', margin: '0 auto', background: 'white', padding: '0.75rem', borderRadius: '50px', display: 'flex', gap: '0.5rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '1.5rem', gap: '0.75rem' }}>
                            <Package size={20} color="#64748b" />
                            <input
                                type="text"
                                placeholder="Tracking Number (e.g. AW-823910)"
                                style={{ border: 'none', outline: 'none', width: '100%', color: '#333', fontSize: '1rem' }}
                                value={trackingId}
                                onChange={(e) => setTrackingId(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary" style={{ borderRadius: '50px', padding: '0.75rem 2.5rem' }} onClick={handleTrack} disabled={isTracking}>
                            {isTracking ? <Loader2 className="animate-spin" /> : 'Track Shipment'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 1.5rem', flex: 1 }}>

                {trackData && (
                    <div className="card" style={{ marginBottom: '4rem', padding: '3rem', borderLeft: '8px solid hsl(var(--primary))' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Shipment #{trackData.id}</h2>
                                <p style={{ fontSize: '1.1rem', color: 'hsl(var(--primary))', fontWeight: 700 }}>{trackData.status}</p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <p style={{ opacity: 0.6 }}>Estimated Arrival</p>
                                <h3 style={{ fontSize: '1.5rem' }}>{trackData.eta}</h3>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ background: '#f0f9ff', padding: '1rem', borderRadius: '12px', color: '#0ea5e9' }}><MapPin /></div>
                                <div>
                                    <p style={{ opacity: 0.6, fontSize: '0.85rem' }}>Origin</p>
                                    <p style={{ fontWeight: 700 }}>{trackData.origin}</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ height: '2px', background: '#e2e8f0', flex: 1, position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '0.5rem' }}>
                                        <Plane size={24} color="#64748b" />
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ opacity: 0.6, fontSize: '0.85rem' }}>Destination</p>
                                    <p style={{ fontWeight: 700 }}>{trackData.destination}</p>
                                </div>
                                <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '12px', color: '#10b981' }}><MapPin /></div>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity size={18} /> Travel History</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '11px', top: '10px', height: 'calc(100% - 20px)', width: '2px', background: '#e2e8f0' }} />
                                {trackData.history.map((h: any, i: number) => (
                                    <div key={i} style={{ display: 'flex', gap: '2rem', position: 'relative' }}>
                                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: i === 0 ? 'hsl(var(--primary))' : 'white', border: '5px solid white', boxShadow: '0 0 0 2px hsl(var(--primary))', zIndex: 1 }} />
                                        <div style={{ flex: 1 }}>
                                            <p style={{ fontWeight: 700 }}>{h.msg} - {h.location}</p>
                                            <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>{h.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Our Comprehensive Solutions</h2>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    <div className="card" style={{ transition: 'transform 0.3s' }}>
                        <div style={{ background: '#eff6ff', color: '#2563eb', padding: '1.5rem', borderRadius: '15px', width: 'fit-content', marginBottom: '1.5rem' }}><Plane size={32} /></div>
                        <h3>Air Freight</h3>
                        <p style={{ opacity: 0.7, margin: '1rem 0' }}>The fastest way to move your cargo internationally. Ideal for high-value and time-sensitive shipments.</p>
                        <button className="btn btn-outline" style={{ width: '100%' }}>Get Quote</button>
                    </div>
                    <div className="card" style={{ transition: 'transform 0.3s' }}>
                        <div style={{ background: '#ecfdf5', color: '#059669', padding: '1.5rem', borderRadius: '15px', width: 'fit-content', marginBottom: '1.5rem' }}><Ship size={32} /></div>
                        <h3>Ocean Freight</h3>
                        <p style={{ opacity: 0.7, margin: '1rem 0' }}>Cost-effective solutions for large volumes and bulk shipments. Full Container (FCL) and Partial (LCL).</p>
                        <button className="btn btn-outline" style={{ width: '100%' }}>Get Quote</button>
                    </div>
                    <div className="card" style={{ transition: 'transform 0.3s' }}>
                        <div style={{ background: '#fef2f2', color: '#dc2626', padding: '1.5rem', borderRadius: '15px', width: 'fit-content', marginBottom: '1.5rem' }}><Truck size={32} /></div>
                        <h3>Road Transport</h3>
                        <p style={{ opacity: 0.7, margin: '1rem 0' }}>Extensive network for domestic and cross-border trucking. Door-to-door delivery with live tracking.</p>
                        <button className="btn btn-outline" style={{ width: '100%' }}>Get Quote</button>
                    </div>
                </div>

                <div className="card" style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', color: 'white', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem', padding: '4rem', border: 'none' }}>
                    <div>
                        <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Global Reach, Local Expertise</h2>
                        <p style={{ opacity: 0.9, fontSize: '1.1rem', marginBottom: '2.5rem' }}>With partners in over 120 countries, we handle the complexities of customs and local regulations so you don't have to.</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><ShieldCheck /> Secure Handling</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Globe /> Global Coverage</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><ArrowRightLeft /> Custom Clearance</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Package /> Express Delivery</div>
                        </div>
                    </div>
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', color: '#333' }}>
                        <h4 style={{ marginBottom: '1.5rem' }}>Request a Customs Quote</h4>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="text" placeholder="Full Name" className="input" />
                            <input type="email" placeholder="Email Address" className="input" />
                            <select className="input">
                                <option>Air Freight</option>
                                <option>Sea Freight</option>
                                <option>Road Freight</option>
                            </select>
                            <textarea placeholder="Tell us about your cargo..." className="input" style={{ minHeight: '100px' }}></textarea>
                            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Request</button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

const Activity = ({ size, color }: { size: number, color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
);
