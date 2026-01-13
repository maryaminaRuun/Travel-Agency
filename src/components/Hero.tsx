import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.overlay} />
                {/* We use an img tag or CSS background. Next/Image is better but CSS is easier for full bg cover without absolute positioning hell sometimes. Let's use CSS bg in module. */}
            </div>

            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>
                    Experience the Future of <span className="gradient-text">Travel</span>
                </h1>
                <p className={styles.subtitle}>
                    Seamless bookings for flights, hotels, cargo, and premium services.
                    Your all-in-one platform for global mobility.
                </p>

                <div className={styles.actions}>
                    <Link href="/book" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        Start Booking
                    </Link>
                    <Link href="/services" className={`btn ${styles.secondaryBtn}`}>
                        Explore Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
