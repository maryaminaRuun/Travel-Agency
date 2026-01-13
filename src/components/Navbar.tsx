"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';
import AuthModal from './AuthModal';
import { ChevronDown, Plane, Building, Box, Map, ShieldCheck } from 'lucide-react';

export default function Navbar() {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className={`glass ${styles.nav}`}>
                <div className={`container ${styles.container}`}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/logo.png"
                            alt="AirLink Logo"
                            width={150}
                            height={45}
                            className={styles.logoImage}
                            priority
                        />
                    </Link>

                    <div className={styles.links}>
                        <div className={styles.dropdownContainer}>
                            <button className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '4px', border: 'none', background: 'none', cursor: 'pointer' }}>
                                Services <ChevronDown size={14} />
                            </button>
                            <div className={styles.megaMenu}>
                                <div className={styles.megaGrid}>
                                    <Link href="/flights" className={styles.megaItem}>
                                        <Plane size={20} color="hsl(var(--primary))" />
                                        <div>
                                            <p className={styles.megaTitle}>Flights</p>
                                            <p className={styles.megaDesc}>Book global tickets</p>
                                        </div>
                                    </Link>
                                    <Link href="/hotels" className={styles.megaItem}>
                                        <Building size={20} color="hsl(var(--primary))" />
                                        <div>
                                            <p className={styles.megaTitle}>Hotels</p>
                                            <p className={styles.megaDesc}>Premium stays worldwide</p>
                                        </div>
                                    </Link>
                                    <Link href="/visa" className={styles.megaItem}>
                                        <ShieldCheck size={20} color="hsl(var(--primary))" />
                                        <div>
                                            <p className={styles.megaTitle}>Visa</p>
                                            <p className={styles.megaDesc}>Expert applications</p>
                                        </div>
                                    </Link>
                                    <Link href="/cargo" className={styles.megaItem}>
                                        <Box size={20} color="hsl(var(--primary))" />
                                        <div>
                                            <p className={styles.megaTitle}>Cargo</p>
                                            <p className={styles.megaDesc}>Global logistics</p>
                                        </div>
                                    </Link>
                                    <Link href="/tours" className={styles.megaItem}>
                                        <Map size={20} color="hsl(var(--primary))" />
                                        <div>
                                            <p className={styles.megaTitle}>Tours</p>
                                            <p className={styles.megaDesc}>Custom packages</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link href="/about" className={styles.link}>About</Link>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                    </div>

                    <div className={styles.actions}>
                        <button
                            onClick={() => setIsAuthOpen(true)}
                            className="btn btn-outline"
                            style={{ marginRight: '0.5rem', fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                        >
                            Log In
                        </button>
                        <Link href="/signup" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1.25rem' }}>Sign Up</Link>
                    </div>
                </div>
            </nav>

            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        </>
    );
}
