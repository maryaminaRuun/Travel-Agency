import Navbar from "@/components/Navbar";
import UnifiedSearch from "@/components/UnifiedSearch";
import FlightResults from "@/components/FlightResults";
import Footer from "@/components/Footer";

export default function FlightsPage() {
    return (
        <main style={{ background: 'var(--background)', minHeight: '100vh' }}>
            <Navbar />

            <div style={{
                background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 300px, var(--background) 300px)',
                paddingTop: '8rem',
                paddingBottom: '4rem'
            }}>
                <div className="container">
                    <div style={{ color: 'white', marginBottom: '2rem' }}>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Flight Deals</h1>
                        <p style={{ opacity: 0.8 }}>Compare and book flights across hundreds of airlines.</p>
                    </div>

                    {/* Integrated Search Widget */}
                    <div style={{ marginBottom: '3rem' }}>
                        <UnifiedSearch />
                    </div>

                    {/* Results Section */}
                    <FlightResults />
                </div>
            </div>

            <Footer />
        </main>
    );
}
