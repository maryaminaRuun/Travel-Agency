"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import styles from '../login/Auth.module.css'; // Share styles

export default function Signup() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        router.push('/applicant');
    };

    return (
        <div className={styles.container}>
            <div className={`card ${styles.authCard}`}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <Image src="/logo.png" alt="AirLink" width={160} height={50} style={{ objectFit: 'contain' }} />
                </div>
                <h1 className={styles.title}>Create Account</h1>
                <p className={styles.subtitle}>Join us for premium travel services</p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <div className={styles.group}>
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" className={styles.input} placeholder="John" required />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" className={styles.input} placeholder="Doe" required />
                        </div>
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className={styles.input} placeholder="john@example.com" required />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className={styles.input} placeholder="••••••••" required />
                    </div>

                    <button type="submit" disabled={isLoading} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Sign Up'}
                    </button>
                </form>

                <p className={styles.footer}>
                    Already have an account? <Link href="/login">Sign in</Link>
                </p>
            </div>
        </div>
    );
}
