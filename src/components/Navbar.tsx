"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';
import AuthModal from './AuthModal';

export default function Navbar() {
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    return (
        <>
            <nav className={`glass ${styles.nav}`}>
                <div className={`container ${styles.container}`}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/logo.png"
                            alt="AirLink Logo"
                            width={150}
                            height={50}
                            className={styles.logoImage}
                            priority
                        />
                    </Link>

                    <div className={styles.links}>
                        <Link href="/services" className={styles.link}>Services</Link>
                        <Link href="/about" className={styles.link}>About</Link>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                    </div>

                    <div className={styles.actions}>
                        <button
                            onClick={() => setIsAuthOpen(true)}
                            className="btn btn-outline"
                            style={{ marginRight: '0.5rem' }}
                        >
                            Login
                        </button>
                        <Link href="/signup" className="btn btn-primary">Sign Up</Link>
                    </div>
                </div>
            </nav>

            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        </>
    );
}
