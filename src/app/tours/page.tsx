import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, MapPin, Tag } from 'lucide-react';

export default function ToursPage() {
    const tours = [
        {
            title: "Historical Mogadishu Tour",
            location: "Somalia",
            duration: "3 Days",
            price: 250,
            img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Safari Adventure",
            location: "Nairobi, Kenya",
            duration: "5 Days",
            price: 1200,
            img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Dubai Desert Safari",
            location: "Dubai, UAE",
            duration: "1 Day",
            price: 150,
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <main style={{ background: '#f5f7fa', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div className="container" style={{ padding: '8rem 1.5rem 4rem', flex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ marginBottom: '1rem', fontSize: '3rem', fontWeight: 800 }}>Tours & Attractions</h1>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>Handpicked experiences and holiday packages for every traveler.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {tours.map((tour, idx) => (
                        <div key={idx} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                            <div style={{ height: '250px', backgroundImage: `url(${tour.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem', color: '#666', fontSize: '0.85rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {tour.location}</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {tour.duration}</span>
                                </div>
                                <h3 style={{ marginBottom: '1.5rem' }}>{tour.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                                    <div>
                                        <span style={{ fontSize: '0.8rem', color: '#666' }}>Starting from</span>
                                        <div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>${tour.price}</div>
                                    </div>
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
