import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.brandCol}>
                    <Image src="/logo.png" alt="AirLink Logo" width={180} height={60} className={styles.logo} />
                    <p className={styles.description}>
                        AirLink is a leading travel, tourism & cargo agency dedicated to providing seamless travel experiences and reliable logistics solutions worldwide.
                    </p>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink}><Facebook size={20} /></a>
                        <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
                        <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
                        <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className={styles.linkCol}>
                    <h3>Services</h3>
                    <Link href="/flights">Flights</Link>
                    <Link href="/hotels">Hotels</Link>
                    <Link href="/tours">Tour Packages</Link>
                    <Link href="/visa">Visa Services</Link>
                    <Link href="/cargo">Cargo & Logistics</Link>
                </div>

                <div className={styles.linkCol}>
                    <h3>Company</h3>
                    <Link href="/about">About Us</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/careers">Careers</Link>
                    <Link href="/blog">Travel Blog</Link>
                    <Link href="/terms">Terms of Service</Link>
                </div>

                <div className={styles.linkCol}>
                    <h3>Contact Us</h3>
                    <div className={styles.contactItem}>
                        <MapPin size={18} />
                        <span>Mogadishu, Somalia</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Phone size={18} />
                        <span>+252 61 646 4022</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Mail size={18} />
                        <span>info@airlinktravel.so</span>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} AirLink Travel, Tourism & Cargo Agency. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
