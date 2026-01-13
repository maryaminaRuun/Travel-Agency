"use client";

import { useState } from 'react';
import styles from './FlightSearch.module.css';
import { Plane, Calendar, Users, Search } from 'lucide-react';

export default function FlightSearch() {
    const [tripType, setTripType] = useState('round-trip');

    return (
        <div className={`glass ${styles.searchContainer}`}>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${tripType === 'round-trip' ? styles.active : ''}`}
                    onClick={() => setTripType('round-trip')}
                >
                    Round Trip
                </button>
                <button
                    className={`${styles.tab} ${tripType === 'one-way' ? styles.active : ''}`}
                    onClick={() => setTripType('one-way')}
                >
                    One Way
                </button>
                <button
                    className={`${styles.tab} ${tripType === 'multi-city' ? styles.active : ''}`}
                    onClick={() => setTripType('multi-city')}
                >
                    Multi-City
                </button>
            </div>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}><Plane size={16} /> From</label>
                        <input type="text" className={styles.input} placeholder="City or Airport" defaultValue="New York (JFK)" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}><Plane size={16} className={styles.rotate} /> To</label>
                        <input type="text" className={styles.input} placeholder="City or Airport" defaultValue="London (LHR)" />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}><Calendar size={16} /> Departure</label>
                        <input type="date" className={styles.input} />
                    </div>

                    {tripType === 'round-trip' && (
                        <div className={styles.inputGroup}>
                            <label className={styles.label}><Calendar size={16} /> Return</label>
                            <input type="date" className={styles.input} />
                        </div>
                    )}

                    <div className={styles.inputGroup}>
                        <label className={styles.label}><Users size={16} /> Passengers & Class</label>
                        <select className={styles.input}>
                            <option>1 Adult, Economy</option>
                            <option>2 Adults, Economy</option>
                            <option>1 Adult, Business</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    <Search size={20} style={{ marginRight: '0.5rem' }} /> Search Flights
                </button>
            </form>
        </div>
    );
}
