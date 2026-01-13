import Navbar from "@/components/Navbar";
import UnifiedSearch from "@/components/UnifiedSearch";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Plane, FileText, Map as MapIcon, Box, Building, Car, Languages, Users, ShieldCheck, Clock, Award, Star } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const services = [
    { title: "Visa Services", description: "Hassle-free visa applications & tracking.", icon: <FileText size={32} />, href: "/visa" },
    { title: "Tour Packages", description: "Customized holiday packages.", icon: <MapIcon size={32} />, href: "/tours" },
    { title: "Cargo Services", description: "Reliable logistics solutions.", icon: <Box size={32} />, href: "/cargo" },
    { title: "Translation", description: "Professional document services.", icon: <Languages size={32} />, href: "/services/translation" },
    { title: "Meet & Greet", description: "VIP airport assistance.", icon: <Users size={32} />, href: "/services/meet-and-greet" },
    { title: "Real Estate", description: "Global property listings.", icon: <Building size={32} />, href: "/services/real-estate" },
  ];

  return (
    <main style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground} />
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Your Global Gateway</h1>
          <p style={{ color: 'white', fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9 }}>Flights, Hotels, Visa & Cargo - All in one place.</p>
          <UnifiedSearch />
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '6rem 1.5rem', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>Why Choose AirLink?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'hsl(var(--primary))', marginBottom: '1.5rem' }}><ShieldCheck size={48} style={{ margin: 'auto' }} /></div>
              <h3 style={{ marginBottom: '1rem' }}>Secure & Reliable</h3>
              <p style={{ color: '#666' }}>Industry-certified security for all your bookings and sensitive documents.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'hsl(var(--primary))', marginBottom: '1.5rem' }}><Clock size={48} style={{ margin: 'auto' }} /></div>
              <h3 style={{ marginBottom: '1rem' }}>24/7 Support</h3>
              <p style={{ color: '#666' }}>Our experts are always available to assist with your travel or cargo needs.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'hsl(var(--primary))', marginBottom: '1.5rem' }}><Award size={48} style={{ margin: 'auto' }} /></div>
              <h3 style={{ marginBottom: '1rem' }}>Best Price Guarantee</h3>
              <p style={{ color: '#666' }}>We negotiate directly with airlines and hotels to get you the lowest rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className={`container ${styles.dealsSection}`}>
        <h2 className={styles.sectionTitle}>Global Opportunities</h2>
        <div className={styles.dealsGrid}>
          <div className={styles.dealCard}>
            <div className={styles.dealBadge}>Flight + Hotel</div>
            <h3>Istanbul</h3>
            <p>Packages starting from $899</p>
          </div>
          <div className={styles.dealCard} style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=800&q=80)' }}>
            <div className={styles.dealBadge} style={{ background: 'var(--secondary)' }}>New</div>
            <h3>Mogadishu Tour</h3>
            <p>Explore the history of Somalia</p>
          </div>
          <div className={styles.dealCard} style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80)' }}>
            <div className={styles.dealBadge}>Expedited</div>
            <h3>USA Visa</h3>
            <p>Priority interview assistance</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`container ${styles.servicesSection}`}>
        <h2 className={styles.sectionTitle}>Our Ecosystem</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '6rem 1.5rem', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>Trusted by Thousands</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>{[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#FFB400" color="#FFB400" />)}</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', opacity: 0.8 }}>"The visa processing was incredibly fast. I didn't have to worry about anything as they handled all the documents."</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#eee' }} />
                <div><p style={{ fontWeight: 700 }}>Ahmed Mohamed</p><p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Business Traveler</p></div>
              </div>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>{[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#FFB400" color="#FFB400" />)}</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', opacity: 0.8 }}>"Reliable cargo service for my business from Dubai to Mogadishu. Always on time and excellent communication."</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#eee' }} />
                <div><p style={{ fontWeight: 700 }}>Sarah J.</p><p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Import/Export Agent</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '6rem 1.5rem', background: 'hsl(var(--primary))', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Stay Inside the Loop</h2>
          <p style={{ opacity: 0.9, marginBottom: '2.5rem' }}>Subscribe to get exclusive travel deals and latest logistics updates delivered straight to your inbox.</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="email" placeholder="Your email address" style={{ flex: 1, padding: '1rem 1.5rem', borderRadius: '4px', border: 'none', outline: 'none' }} />
            <button className="btn" style={{ background: '#0f172a', color: 'white', padding: '0 2rem' }}>Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
