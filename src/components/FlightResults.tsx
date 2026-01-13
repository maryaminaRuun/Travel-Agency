"use client";

import { useRouter } from 'next/navigation';
import styles from './FlightResults.module.css';
import { Plane, Clock, ChevronRight } from 'lucide-react';

const MOCK_FLIGHTS = [
    {
        id: 1,
        airline: 'Somali Airlines',
        logo: 'https://www.google.com/s2/favicons?domain=somaliairlines.com&sz=64',
        departureTime: '08:00',
        arrivalTime: '11:30',
        from: 'MGQ',
        to: 'DXB',
        duration: '3h 30m',
        stops: 'Non-stop',
        price: 450,
        type: 'Economy'
    },
    {
        id: 2,
        airline: 'Ethiopian Airlines',
        logo: 'https://www.google.com/s2/favicons?domain=ethiopianairlines.com&sz=64',
        departureTime: '10:15',
        arrivalTime: '15:45',
        from: 'MGQ',
        to: 'DXB',
        duration: '5h 30m',
        stops: '1 stop (ADD)',
        price: 380,
        type: 'Economy'
    },
    {
        id: 3,
        airline: 'Qatar Airways',
        logo: 'https://www.google.com/s2/favicons?domain=qatarairways.com&sz=64',
        departureTime: '14:20',
        arrivalTime: '21:00',
        from: 'MGQ',
        to: 'DXB',
        duration: '6h 40m',
        stops: '1 stop (DOH)',
        price: 520,
        type: 'Economy'
    },
    {
        id: 4,
        airline: 'Turkish Airlines',
        logo: 'https://www.google.com/s2/favicons?domain=turkishairlines.com&sz=64',
        departureTime: '02:00',
        arrivalTime: '12:30',
        from: 'MGQ',
        to: 'DXB',
        duration: '10h 30m',
        stops: '1 stop (IST)',
        price: 490,
        type: 'Economy'
    }
];

export default function FlightResults() {
    const router = useRouter();

    const handleSelect = (id: number) => {
        router.push(`/checkout/${id}`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                <h3>Filters</h3>
                <div className={styles.filterGroup}>
                    <p style={{ fontWeight: 600, margin: '1rem 0 0.5rem' }}>Stops</p>
                    <label style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                        <input type="checkbox" /> Non-stop
                    </label>
                    <label style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                        <input type="checkbox" /> 1 Stop
                    </label>
                </div>
                <div className={styles.filterGroup}>
                    <p style={{ fontWeight: 600, margin: '1rem 0 0.5rem' }}>Airlines</p>
                    <label style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                        <input type="checkbox" /> Somali Airlines
                    </label>
                    <label style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                        <input type="checkbox" /> Ethiopian Airlines
                    </label>
                </div>
            </div>

            <div className={styles.resultsList}>
                <div className={styles.sortBar}>
                    <span>Showing {MOCK_FLIGHTS.length} flights</span>
                    <select className="input" style={{ width: 'auto', padding: '0.4rem' }}>
                        <option>Recommended</option>
                        <option>Cheapest</option>
                        <option>Fastest</option>
                    </select>
                </div>

                {MOCK_FLIGHTS.map(flight => (
                    <div key={flight.id} className={`card ${styles.flightCard}`}>
                        <div className={styles.airlineInfo}>
                            <img src={flight.logo} alt={flight.airline} className={styles.airlineLogo} />
                            <span>{flight.airline}</span>
                        </div>

                        <div className={styles.flightDetail}>
                            <div className={styles.timeBlock}>
                                <strong>{flight.departureTime}</strong>
                                <span>{flight.from}</span>
                            </div>
                            <div className={styles.pathBlock}>
                                <span>{flight.duration}</span>
                                <div className={styles.line}>
                                    <div className={styles.dot} />
                                    <Plane size={14} className={styles.planeIcon} />
                                    <div className={styles.dot} />
                                </div>
                                <span style={{ fontSize: '0.75rem', color: '#666' }}>{flight.stops}</span>
                            </div>
                            <div className={styles.timeBlock}>
                                <strong>{flight.arrivalTime}</strong>
                                <span>{flight.to}</span>
                            </div>
                        </div>

                        <div className={styles.priceBlock}>
                            <div className={styles.price}>
                                <span className={styles.currency}>$</span>
                                <span className={styles.amount}>{flight.price}</span>
                            </div>
                            <button className="btn btn-primary" onClick={() => handleSelect(flight.id)}>
                                Select <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
