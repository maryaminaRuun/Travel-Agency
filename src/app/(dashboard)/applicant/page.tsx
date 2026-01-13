"use client";

import { useSession } from "next-auth/react";
import { CheckCircle, Clock, Plane, FileText, User, LayoutDashboard, Settings, LogOut } from 'lucide-react';
import Image from 'next/image';

export default function ApplicantPage() {
    const { data: session } = useSession();

    const bookings = [
        { id: 'BK-7829', type: 'Flight', title: 'New York (JFK) → London (LHR)', date: 'Mar 15, 2026', status: 'Confirmed', icon: <Plane /> },
        { id: 'VS-9921', type: 'Visa', title: 'Schengen Visa Application', date: 'Feb 28, 2026', status: 'Processing', icon: <FileText /> },
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ marginBottom: '0.5rem', fontSize: '2.5rem' }}>Dashboard</h1>
                    <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>
                        Welcome back, <strong style={{ color: 'hsl(var(--primary))' }}>{session?.user?.name || 'Guest'}</strong>.
                    </p>
                </div>
                {session?.user?.image && (
                    <div style={{ position: 'relative', width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '3px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                        <Image src={session.user.image} alt="User Avatar" fill style={{ objectFit: 'cover' }} />
                    </div>
                )}
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '4px solid hsl(var(--primary))' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', fontWeight: 600 }}>CASHBACK REWARDS</p>
                        <CreditCard size={20} color="hsl(var(--primary))" />
                    </div>
                    <h3 style={{ fontSize: '2rem' }}>$142.50</h3>
                    <p style={{ fontSize: '0.8rem', color: 'hsl(var(--success))' }}>+ $12.00 from last booking</p>
                </div>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '4px solid var(--secondary)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', fontWeight: 600 }}>ACTIVE TRIPS</p>
                        <Plane size={20} color="var(--secondary)" />
                    </div>
                    <h3 style={{ fontSize: '2rem' }}>2</h3>
                    <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Next flight in 12 days</p>
                </div>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '4px solid #f59e0b' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', fontWeight: 600 }}>DOCUMENTS</p>
                        <FileText size={20} color="#f59e0b" />
                    </div>
                    <h3 style={{ fontSize: '2rem' }}>3</h3>
                    <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>1 application needs attention</p>
                </div>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h3>Recent Bookings</h3>
                    <button className="btn btn-outline" style={{ fontSize: '0.9rem' }}>View All</button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {bookings.map((booking) => (
                        <div key={booking.id} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '1.25rem',
                            border: '1px solid #f1f5f9',
                            borderRadius: '12px',
                            background: '#f8fafc',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            cursor: 'pointer'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{
                                    background: 'white',
                                    color: 'hsl(var(--primary))',
                                    padding: '0.75rem',
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                }}>
                                    {booking.icon}
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>{booking.title}</h4>
                                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', opacity: 0.6 }}>
                                        <span>#{booking.id}</span>
                                        <span>•</span>
                                        <span>{booking.type}</span>
                                        <span>•</span>
                                        <span>{booking.date}</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <span style={{
                                    padding: '0.4rem 1rem',
                                    borderRadius: '20px',
                                    background: booking.status === 'Confirmed' ? '#ecfdf5' : '#fffbeb',
                                    color: booking.status === 'Confirmed' ? '#059669' : '#d97706',
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    {booking.status === 'Confirmed' ? <CheckCircle size={14} /> : <Clock size={14} />}
                                    {booking.status}
                                </span>
                                <ChevronRight size={20} opacity={0.3} />
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                    <button className="btn btn-primary" style={{ padding: '0.75rem 3rem' }}>
                        Start New Booking
                    </button>
                    <p style={{ marginTop: '1rem', fontSize: '0.85rem', opacity: 0.5 }}>
                        Need help? <a href="/contact" style={{ color: 'hsl(var(--primary))', textDecoration: 'underline' }}>Contact an agent</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

// Additional icon import
const CreditCard = ({ size, color }: { size: number, color: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
);
const ChevronRight = ({ size, opacity }: { size: number, opacity: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity }}><polyline points="9 18 15 12 9 6" /></svg>
);
