import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, MapPin, Building, Star, Check } from 'lucide-react';

export default function HotelsPage() {
    const popularHotels = [
        { name: "Grand Plaza Hotel", location: "New York", price: 299, rating: 4.8, img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' },
        { name: "Seaside Resort", location: "Miami", price: 450, rating: 4.9, img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80' },
        { name: "Alpine Lodge", location: "Swiss Alps", price: 340, rating: 4.7, img: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80' },
    ];

    return (
        <main style={{ background: '#f5f7fa', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ background: 'linear-gradient(to right, #2b32b2, #1488cc)', padding: '6rem 0 3rem' }}>
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: '2rem' }}>Find the Perfect Stay</h1>
                    <div className="card" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                        <div style={{ flex: 2 }}>
                            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#666' }}>Destination</label>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', padding: '0.8rem', borderRadius: '4px' }}>
                                <MapPin size={18} style={{ marginRight: '0.5rem', color: '#666' }} />
                                <input type="text" placeholder="Where are you going?" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem' }} />
                            </div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#666' }}>Check-in / Check-out</label>
                            <div style={{ border: '1px solid #ddd', padding: '0.8rem', borderRadius: '4px' }}>
                                <input type="text" placeholder="Select Dates" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem' }} />
                            </div>
                        </div>
                        <button className="btn btn-primary" style={{ height: '48px', padding: '0 2rem' }}>Search Hotels</button>
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 1.5rem' }}>
                <h2 style={{ marginBottom: '2rem' }}>Trending Properties</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {popularHotels.map((hotel, idx) => (
                        <div key={idx} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                            <div style={{ height: '200px', backgroundImage: `url(${hotel.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 'bold' }}>
                                    <Star size={14} fill="#FFB400" color="#FFB400" /> {hotel.rating}
                                </div>
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <MapPin size={14} /> {hotel.location}
                                </div>
                                <h3 style={{ marginBottom: '1rem' }}>{hotel.name}</h3>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                                    {['Free Wifi', 'Pool', 'Breakfast'].map(tag => (
                                        <span key={tag} style={{ fontSize: '0.75rem', background: '#f0f7ff', color: '#666', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>{tag}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                    <div>
                                        <span style={{ fontSize: '0.8rem', color: '#666' }}>per night</span>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'hsl(var(--primary))' }}>${hotel.price}</div>
                                    </div>
                                    <button className="btn btn-primary">Book Now</button>
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
