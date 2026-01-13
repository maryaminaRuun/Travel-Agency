"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import styles from './AuthModal.module.css';
import { X, Chrome, Facebook, Apple, ShieldCheck, CreditCard, Loader2 } from 'lucide-react';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    if (!isOpen) return null;

    const handleContinue = async (e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        setIsLoading(true);
        // Simulate API call for email login
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        onClose();
        router.push('/applicant');
    };

    const handleGoogleSignIn = () => {
        signIn('google', { callbackUrl: '/applicant' });
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                    <X size={24} />
                </button>

                <div className={styles.leftPane}>
                    <h2 className={styles.title}>Sign in / Register</h2>

                    <div className={styles.badges}>
                        <div className={styles.badge}>
                            <ShieldCheck size={16} className={styles.badgeIcon} />
                            <span>Membership rewards</span>
                        </div>
                        <div className={styles.badge}>
                            <CreditCard size={16} className={styles.badgeIcon} />
                            <span>Manage bookings with ease</span>
                        </div>
                    </div>

                    <form onSubmit={(e) => { e.preventDefault(); if (email && email.includes('@')) handleContinue(); }}>
                        <div className={styles.inputGroup}>
                            <input
                                type="email"
                                className={styles.input}
                                placeholder="Please enter an email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isLoading}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.continueBtn}
                            disabled={!email || !email.includes('@') || isLoading}
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin" size={20} style={{ margin: 'auto' }} />
                            ) : (
                                'Continue with Email'
                            )}
                        </button>
                    </form>

                    <div className={styles.separator}>or</div>

                    <div className={styles.socialGrid}>
                        <button className={styles.socialBtn} onClick={handleGoogleSignIn} disabled={isLoading}>
                            <Chrome size={18} color="#4285F4" />
                            Continue with Google
                        </button>
                        <button className={styles.socialBtn} onClick={() => handleContinue()} disabled={isLoading}>
                            <Apple size={18} color="#000" />
                            Continue with Apple
                        </button>
                        <button className={styles.socialBtn} onClick={() => handleContinue()} disabled={isLoading}>
                            <Facebook size={18} color="#1877F2" />
                            Continue with Facebook
                        </button>
                        <button className={styles.socialBtn} onClick={() => handleContinue()} disabled={isLoading}>
                            <span style={{ color: '#07C160', fontWeight: 'bold' }}>W</span>
                            Continue with WeChat
                        </button>
                    </div>

                    <p className={styles.finePrint}>
                        By signing in or registering, you are deemed to have agreed to the AirLink
                        <a href="#" className={styles.link} onClick={(e) => e.preventDefault()}> Terms and Conditions</a> and
                        <a href="#" className={styles.link} onClick={(e) => e.preventDefault()}> Privacy Statement</a>.
                    </p>
                </div>

                <div className={styles.rightPane}>
                    <div className={styles.qrContainer}>
                        <div className={styles.qrImagePlaceholder}>
                            <div style={{ padding: '5px', background: '#333', borderRadius: '4px' }}>
                                <div style={{ border: '15px solid white', background: '#333', width: '100px', height: '100px', position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '4px', borderRadius: '4px' }}>
                                        <div style={{ background: '#3388ff', width: '20px', height: '20px', borderRadius: '2px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className={styles.qrTitle}>Use the AirLink app to sign in with a QR code</h3>
                        <div className={styles.qrInstructions}>
                            <div className={styles.step}>
                                <span className={styles.stepNum}>1</span>
                                <span>Open the AirLink app</span>
                            </div>
                            <div className={styles.step}>
                                <span className={styles.stepNum}>2</span>
                                <span>Go to <strong>Account</strong></span>
                            </div>
                            <div className={styles.step}>
                                <span className={styles.stepNum}>3</span>
                                <span>Tap scan icon in the top-right corner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
