"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import styles from './Auth.module.css';

export default function Login() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            // Mock routing based on "role" - for now just go to applicant
            router.push('/applicant');
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className={styles.container}>
            <div className={`card ${styles.authCard}`}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <Image src="/logo.png" alt="AirLink" width={160} height={50} style={{ objectFit: 'contain' }} />
                </div>
                <h1 className={styles.title}>Welcome Back</h1>
                <p className={styles.subtitle}>Sign in to your account</p>

                <form className={styles.form} onSubmit={handleLogin}>
                    <div className={styles.group}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className={styles.input} placeholder="john@example.com" required />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className={styles.input} placeholder="••••••••" required />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={isLoading}>
                        {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Sign In'}
                    </button>
                </form>

                <p className={styles.footer}>
                    Don't have an account? <Link href="/signup">Sign up</Link>
                </p>
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <Link href="/" style={{ fontSize: '0.9rem', color: 'var(--foreground)', opacity: 0.6 }}>Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
