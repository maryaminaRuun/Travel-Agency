"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './UnifiedSearch.module.css';
import { Plane, Building, Train, Car, Map, Search, Calendar, User, Plus, Minus, ArrowRightLeft, Target, X, Briefcase, ChevronLeft, ChevronRight, MapPin, Loader2 } from 'lucide-react';

export default function UnifiedSearch() {
    const [activeTab, setActiveTab] = useState('flights');
    const [tripType, setTripType] = useState('round-trip'); // round-trip, one-way, multi-city

    // Dropdowns state
    const [showFromDropdown, setShowFromDropdown] = useState(false);
    const [showToDropdown, setShowToDropdown] = useState(false);
    const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
    const [showDateDropdown, setShowDateDropdown] = useState(false);

    // Track which date input is active
    const [activeDateInput, setActiveDateInput] = useState<'depart' | 'return'>('depart');

    // Form Values
    const [fromCity, setFromCity] = useState("Mogadishu");
    const [toCity, setToCity] = useState("Hong Kong");
    const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });
    const [cabinClass, setCabinClass] = useState("Economy");

    // Date State
    const [departDate, setDepartDate] = useState<Date>(new Date(2026, 0, 15)); // Jan 15 2026
    const [returnDate, setReturnDate] = useState<Date | null>(new Date(2026, 0, 17)); // Jan 17 2026

    // Multi-city state
    const [multiCityFlights, setMultiCityFlights] = useState([
        { from: 'Mogadishu', to: 'Hong Kong', date: 'Thu, Jan 15' },
        { from: 'Hong Kong', to: 'Going to', date: 'Choose date' }
    ]);

    const [activeMultiSegment, setActiveMultiSegment] = useState<{ index: number, field: 'from' | 'to' } | null>(null);
    const [activeMultiDateIndex, setActiveMultiDateIndex] = useState<number | null>(null);
    const multiRef = useRef<HTMLDivElement>(null);

    const [isSearching, setIsSearching] = useState(false);
    const router = useRouter();
    const dropdownRefFrom = useRef<HTMLDivElement>(null);
    const dropdownRefTo = useRef<HTMLDivElement>(null);
    const passDropdownRef = useRef<HTMLDivElement>(null);
    const dateDropdownRef = useRef<HTMLDivElement>(null);

    const handleSearch = async () => {
        setIsSearching(true);
        // Simulate search processing
        await new Promise(resolve => setTimeout(resolve, 800));
        setIsSearching(false);
        if (activeTab === 'flights') router.push('/flights');
        else router.push(`/services/${activeTab}`);
    };

    const swapCities = () => {
        const temp = fromCity;
        setFromCity(toCity);
        setToCity(temp);
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRefFrom.current && !dropdownRefFrom.current.contains(event.target as Node)) setShowFromDropdown(false);
            if (dropdownRefTo.current && !dropdownRefTo.current.contains(event.target as Node)) setShowToDropdown(false);
            if (passDropdownRef.current && !passDropdownRef.current.contains(event.target as Node)) setShowPassengerDropdown(false);

            // For date dropdown, check both standard and multi-city refs
            const isClickInsideDate = dateDropdownRef.current?.contains(event.target as Node);
            const isClickInsideMulti = multiRef.current?.contains(event.target as Node);

            if (!isClickInsideDate && !isClickInsideMulti) {
                setShowDateDropdown(false);
                setActiveMultiDateIndex(null);
            }

            if (multiRef.current && !multiRef.current.contains(event.target as Node)) {
                setActiveMultiSegment(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const tabs = [
        { id: 'hotels', label: 'Hotels & Homes', icon: <Building size={16} /> },
        { id: 'flights', label: 'Flights', icon: <Plane size={16} /> },
        { id: 'trains', label: 'Trains', icon: <Train size={16} /> },
        { id: 'cars', label: 'Cars', icon: <Car size={16} /> },
        { id: 'tours', label: 'Attractions & Tours', icon: <Map size={16} /> },
        { id: 'packages', label: 'Flight + Hotel', icon: <Briefcase size={16} /> },
    ];

    const popularCities = [
        ["Hong Kong", "Tokyo", "Bangkok"],
        ["Osaka", "Taipei", "Seoul"],
        ["Shanghai", "Beijing", "Chengdu"],
        ["Guangzhou", "Shenzhen", "Sanya"]
    ];

    // Custom Date Picker Grid Generator
    const generateCalendarDays = (year: number, month: number) => {
        const firstDay = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startingDay = firstDay.getDay(); // 0 = Sun

        const days = [];
        for (let i = 0; i < startingDay; i++) days.push(null);
        for (let i = 1; i <= daysInMonth; i++) days.push(i);
        return days;
    };

    const formatDate = (date: Date | null) => {
        if (!date) return 'Select Date';
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    const isSelected = (year: number, month: number, day: number | null) => {
        if (!day) return false;
        const d = new Date(year, month, day);

        if (activeMultiDateIndex !== null) {
            const multiDateStr = multiCityFlights[activeMultiDateIndex].date;
            return formatDate(d) === multiDateStr;
        }

        const target = activeDateInput === 'depart' ? departDate : returnDate;
        if (!target) return false;
        return d.toDateString() === target.toDateString();
    };

    const isRange = (year: number, month: number, day: number | null) => {
        if (!day || !departDate || !returnDate || tripType !== 'round-trip') return false;
        const d = new Date(year, month, day);
        return d > departDate && d < returnDate;
    };

    const handleDateSelect = (year: number, month: number, day: number | null) => {
        if (!day) return;
        const selectedDate = new Date(year, month, day);

        if (activeMultiDateIndex !== null) {
            updateMultiCity(activeMultiDateIndex, 'date', formatDate(selectedDate));
            setShowDateDropdown(false);
            setActiveMultiDateIndex(null);
            return;
        }

        if (activeDateInput === 'depart') {
            setDepartDate(selectedDate);
            if (tripType === 'round-trip') {
                // Auto switch to return if needed
                if (returnDate && returnDate < selectedDate) {
                    setReturnDate(new Date(selectedDate.getTime() + 86400000));
                }
                setActiveDateInput('return');
            } else {
                setShowDateDropdown(false);
            }
        } else {
            // Return date selection
            if (selectedDate < departDate) {
                setDepartDate(selectedDate);
                setReturnDate(null);
                setActiveDateInput('return');
            } else {
                setReturnDate(selectedDate);
                setShowDateDropdown(false);
            }
        }
    };

    const updateMultiCity = (index: number, field: string, value: string) => {
        const newFlights = [...multiCityFlights];
        newFlights[index] = { ...newFlights[index], [field]: value };
        setMultiCityFlights(newFlights);
    };

    const addFlightSegment = () => {
        setMultiCityFlights([...multiCityFlights, { from: 'Select City', to: 'Select City', date: 'Choose date' }]);
    };

    const removeFlightSegment = (index: number) => {
        if (multiCityFlights.length > 2) {
            setMultiCityFlights(multiCityFlights.filter((_, i) => i !== index));
        }
    };

    const renderCityDropdown = (setter: (val: string) => void, close: () => void) => (
        <div className={styles.dropdownModal} style={{ zIndex: 110 }}>
            <div className={styles.ddHeader}><span className={styles.tabActive}>Popular cities</span></div>
            <div className={styles.ddContent}>
                <div className={styles.currentLoc}><Target size={14} /> Current Location: <strong>Mogadishu</strong></div>
                <div className={styles.cityGrid}>
                    {popularCities.map((col, idx) => (
                        <div key={idx} className={styles.cityCol}>
                            {col.map(city => (
                                <div key={city} className={styles.cityItem} onClick={(e) => { e.stopPropagation(); setter(city); close(); }}>{city}</div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles.tabsHeader}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.icon}
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            <div className={styles.content}>
                {activeTab === 'flights' && (
                    <div className={styles.flightLayout}>
                        <div className={styles.flightOptions}>
                            <div className={styles.radios}>
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="trip"
                                        checked={tripType === 'round-trip'}
                                        onChange={() => setTripType('round-trip')}
                                    /> Round-trip
                                </label>
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="trip"
                                        checked={tripType === 'one-way'}
                                        onChange={() => setTripType('one-way')}
                                    /> One-way
                                </label>
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="trip"
                                        checked={tripType === 'multi-city'}
                                        onChange={() => setTripType('multi-city')}
                                    /> Multi-city
                                </label>
                            </div>
                            <label className={styles.checkboxLabel}><input type="checkbox" /> Nonstop</label>
                        </div>

                        {tripType !== 'multi-city' && (
                            <div className={styles.searchRow}>
                                <div className={styles.inputWrapper} style={{ flex: 1.5 }} ref={dropdownRefFrom}>
                                    <div
                                        className={`${styles.inputBox} ${showFromDropdown ? styles.activeInput : ''}`}
                                        onClick={() => setShowFromDropdown(true)}
                                    >
                                        <span className={styles.labelSmall}>Leaving from</span>
                                        <input
                                            type="text"
                                            className={styles.realInput}
                                            value={fromCity}
                                            onChange={(e) => setFromCity(e.target.value)}
                                            placeholder="City or airport"
                                        />
                                    </div>
                                    {showFromDropdown && renderCityDropdown(setFromCity, () => setShowFromDropdown(false))}
                                </div>

                                <div className={styles.inputWrapper} style={{ flex: 1.5 }} ref={dropdownRefTo}>
                                    <div className={styles.inputBox} onClick={() => setShowToDropdown(true)}>
                                        <span className={styles.labelSmall}>Going to</span>
                                        <input
                                            type="text"
                                            className={styles.realInput}
                                            value={toCity}
                                            onChange={(e) => setToCity(e.target.value)}
                                            placeholder="City or airport"
                                        />
                                    </div>
                                    <div className={styles.swapIcon} onClick={swapCities}>
                                        <ArrowRightLeft size={16} color="hsl(var(--primary))" />
                                    </div>
                                    {showToDropdown && renderCityDropdown(setToCity, () => setShowToDropdown(false))}
                                </div>

                                <div className={styles.inputWrapper} style={{ flex: 2 }} ref={dateDropdownRef}>
                                    <div className={styles.inputRow}>
                                        {/* Depart Date Click Handler */}
                                        <div
                                            className={`${styles.inputBox} ${showDateDropdown && activeDateInput === 'depart' ? styles.activeInput : ''}`}
                                            style={{ flex: 1, borderRight: 'none', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                                            onClick={() => { setActiveDateInput('depart'); setShowDateDropdown(true); }}
                                        >
                                            <span className={styles.labelSmall}>Depart</span>
                                            <div className={styles.dateDisplay}>
                                                <strong>{formatDate(departDate)}</strong>
                                            </div>
                                        </div>

                                        {/* Return Date Click Handler */}
                                        {tripType === 'round-trip' && (
                                            <div
                                                className={`${styles.inputBox} ${showDateDropdown && activeDateInput === 'return' ? styles.activeInput : ''}`}
                                                style={{ flex: 1, borderLeft: '1px solid #eee', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                                onClick={() => { setActiveDateInput('return'); setShowDateDropdown(true); }}
                                            >
                                                <span className={styles.labelSmall}>Return</span>
                                                <div className={styles.dateDisplay} style={{ color: returnDate ? '#333' : '#aaa' }}>
                                                    {formatDate(returnDate)}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {showDateDropdown && (
                                        <div className={styles.dropdownModal} style={{ width: '600px', right: 0, left: 'auto', padding: 0, overflow: 'hidden' }}>
                                            <div className={styles.calendarContainer}>
                                                {/* Month 1 */}
                                                <div className={styles.calendarMonth}>
                                                    <div className={styles.monthHeader}>
                                                        <button className={styles.navBtn}><ChevronLeft size={20} /></button>
                                                        <span>January 2026</span>
                                                    </div>
                                                    <div className={styles.daysGrid}>
                                                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className={styles.dayLabel}>{d}</div>)}
                                                        {generateCalendarDays(2026, 0).map((day, i) => (
                                                            <div
                                                                key={i}
                                                                className={`
                                                        ${styles.dayCell} 
                                                        ${isSelected(2026, 0, day) ? styles.selectedDay : ''}
                                                        ${isRange(2026, 0, day) ? styles.rangeDay : ''}
                                                    `}
                                                                onClick={() => handleDateSelect(2026, 0, day)}
                                                            >
                                                                {day}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Month 2 */}
                                                <div className={styles.calendarMonth}>
                                                    <div className={styles.monthHeader} style={{ justifyContent: 'flex-end' }}>
                                                        <span>February 2026</span>
                                                        <button className={styles.navBtn}><ChevronRight size={20} /></button>
                                                    </div>
                                                    <div className={styles.daysGrid}>
                                                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className={styles.dayLabel}>{d}</div>)}
                                                        {generateCalendarDays(2026, 1).map((day, i) => (
                                                            <div
                                                                key={i}
                                                                className={`
                                                        ${styles.dayCell} 
                                                        ${isSelected(2026, 1, day) ? styles.selectedDay : ''}
                                                        ${isRange(2026, 1, day) ? styles.rangeDay : ''}
                                                    `}
                                                                onClick={() => handleDateSelect(2026, 1, day)}
                                                                style={{ opacity: day ? 1 : 0 }}
                                                            >
                                                                {day}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className={styles.inputWrapper} style={{ flex: 2 }} ref={passDropdownRef}>
                                    <div className={styles.inputBox} onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}>
                                        <span className={styles.labelSmall}>Passenger & Class</span>
                                        <div className={styles.dateDisplay}>
                                            <User size={16} />
                                            <span>{passengers.adults + passengers.children + passengers.infants} Adult, {cabinClass}</span>
                                        </div>
                                    </div>
                                    {showPassengerDropdown && (
                                        <div className={styles.dropdownModal} style={{ width: '320px', right: 0, left: 'auto' }}>
                                            <div className={styles.passRow}>
                                                <div>
                                                    <div className={styles.passTitle}>Adults</div>
                                                    <div className={styles.passSub}>12+ years old</div>
                                                </div>
                                                <div className={styles.counter}>
                                                    <button className={styles.cntBtn} onClick={() => setPassengers(p => ({ ...p, adults: Math.max(1, p.adults - 1) }))}><Minus size={14} /></button>
                                                    <span>{passengers.adults}</span>
                                                    <button className={styles.cntBtn} onClick={() => setPassengers(p => ({ ...p, adults: p.adults + 1 }))}><Plus size={14} /></button>
                                                </div>
                                            </div>
                                            <div className={styles.passRow}>
                                                <div>
                                                    <div className={styles.passTitle}>Children</div>
                                                    <div className={styles.passSub}>2-11 years old</div>
                                                </div>
                                                <div className={styles.counter}>
                                                    <button className={styles.cntBtn} onClick={() => setPassengers(p => ({ ...p, children: Math.max(0, p.children - 1) }))}><Minus size={14} /></button>
                                                    <span>{passengers.children}</span>
                                                    <button className={styles.cntBtn} onClick={() => setPassengers(p => ({ ...p, children: p.children + 1 }))}><Plus size={14} /></button>
                                                </div>
                                            </div>
                                            <div className={styles.passRow} style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1rem' }}>
                                                <div>
                                                    <div className={styles.passTitle}>Infants</div>
                                                    <div className={styles.passSub}>Under 2 years</div>
                                                </div>
                                                <div className={styles.counter}>
                                                    <button className={styles.cntBtn} onClick={() => setPassengers(p => ({ ...p, infants: Math.max(0, p.infants - 1) }))}><Minus size={14} /></button>
                                                    <span>{passengers.infants}</span>
                                                    <button className={styles.cntBtn} onClick={() => setPassengers(p => ({ ...p, infants: p.infants + 1 }))}><Plus size={14} /></button>
                                                </div>
                                            </div>
                                            <select
                                                className={styles.classSelect}
                                                value={cabinClass}
                                                onChange={(e) => setCabinClass(e.target.value)}
                                            >
                                                <option>Economy</option>
                                                <option>Premium Economy</option>
                                                <option>Buisness</option>
                                                <option>First</option>
                                            </select>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {tripType === 'multi-city' && (
                            <div className={styles.multiCityContainer} ref={multiRef}>
                                {multiCityFlights.map((flight, idx) => (
                                    <div key={idx} className={styles.multiRow}>
                                        <div className={styles.rowNumber}>{idx + 1}</div>
                                        <div className={styles.inputWrapper} style={{ flex: 1.5 }}>
                                            <div
                                                className={`${styles.inputBox} ${activeMultiSegment?.index === idx && activeMultiSegment?.field === 'from' ? styles.activeInput : ''}`}
                                                onClick={() => setActiveMultiSegment({ index: idx, field: 'from' })}
                                            >
                                                <span className={styles.labelSmall}>Leaving from</span>
                                                <input type="text" className={styles.realInput} value={flight.from} readOnly />
                                            </div>
                                            {activeMultiSegment?.index === idx && activeMultiSegment?.field === 'from' && renderCityDropdown((val) => updateMultiCity(idx, 'from', val), () => setActiveMultiSegment(null))}
                                        </div>
                                        <div className={styles.inputWrapper} style={{ flex: 1.5 }}>
                                            <div
                                                className={`${styles.inputBox} ${activeMultiSegment?.index === idx && activeMultiSegment?.field === 'to' ? styles.activeInput : ''}`}
                                                onClick={() => setActiveMultiSegment({ index: idx, field: 'to' })}
                                            >
                                                <span className={styles.labelSmall}>Going to</span>
                                                <input type="text" className={styles.realInput} value={flight.to} readOnly />
                                            </div>
                                            {activeMultiSegment?.index === idx && activeMultiSegment?.field === 'to' && renderCityDropdown((val) => updateMultiCity(idx, 'to', val), () => setActiveMultiSegment(null))}
                                        </div>
                                        <div className={styles.inputWrapper} style={{ flex: 1 }} ref={idx === 0 ? dateDropdownRef : undefined}>
                                            <div
                                                className={`${styles.inputBox} ${activeMultiDateIndex === idx ? styles.activeInput : ''}`}
                                                onClick={() => { setActiveMultiDateIndex(idx); setShowDateDropdown(true); }}
                                            >
                                                <span className={styles.labelSmall}>Depart</span>
                                                <div className={styles.dateDisplay} style={{ fontWeight: 400 }}>{flight.date}</div>
                                            </div>
                                            {activeMultiDateIndex === idx && showDateDropdown && (
                                                <div className={styles.dropdownModal} style={{ width: '600px', right: 0, left: 'auto', padding: 0, overflow: 'hidden', zIndex: 120 }}>
                                                    <div className={styles.calendarContainer}>
                                                        {/* Month 1 */}
                                                        <div className={styles.calendarMonth}>
                                                            <div className={styles.monthHeader}>
                                                                <button className={styles.navBtn}><ChevronLeft size={20} /></button>
                                                                <span>January 2026</span>
                                                            </div>
                                                            <div className={styles.daysGrid}>
                                                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className={styles.dayLabel}>{d}</div>)}
                                                                {generateCalendarDays(2026, 0).map((day, i) => (
                                                                    <div
                                                                        key={i}
                                                                        className={`
                                                                            ${styles.dayCell} 
                                                                            ${isSelected(2026, 0, day) ? styles.selectedDay : ''}
                                                                        `}
                                                                        onClick={() => handleDateSelect(2026, 0, day)}
                                                                    >
                                                                        {day}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Month 2 */}
                                                        <div className={styles.calendarMonth}>
                                                            <div className={styles.monthHeader} style={{ justifyContent: 'flex-end' }}>
                                                                <span>February 2026</span>
                                                                <button className={styles.navBtn}><ChevronRight size={20} /></button>
                                                            </div>
                                                            <div className={styles.daysGrid}>
                                                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className={styles.dayLabel}>{d}</div>)}
                                                                {generateCalendarDays(2026, 1).map((day, i) => (
                                                                    <div
                                                                        key={i}
                                                                        className={`
                                                                            ${styles.dayCell} 
                                                                            ${isSelected(2026, 1, day) ? styles.selectedDay : ''}
                                                                        `}
                                                                        onClick={() => handleDateSelect(2026, 1, day)}
                                                                        style={{ opacity: day ? 1 : 0 }}
                                                                    >
                                                                        {day}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        {idx > 1 && (
                                            <button className={styles.removeBtn} onClick={() => removeFlightSegment(idx)}>
                                                <X size={16} />
                                            </button>
                                        )}
                                    </div>
                                ))}

                                <div className={styles.multiActions}>
                                    <button className={styles.addFlightBtn} onClick={addFlightSegment}>
                                        <Plus size={16} /> Add another flight
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className={styles.bottomActions}>
                            <div className={styles.spacer} />
                            <button className={styles.bundleBtn}>
                                Flight + Hotel
                            </button>
                            <button className={styles.searchBtn} onClick={handleSearch} disabled={isSearching}>
                                {isSearching ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
                                Search
                            </button>
                        </div>

                    </div>
                )}

                {activeTab === 'hotels' && (
                    <div className={styles.flightLayout}>
                        <div className={styles.searchRow}>
                            <div className={styles.inputWrapper} style={{ flex: 2 }} ref={dropdownRefTo}>
                                <div
                                    className={`${styles.inputBox} ${showToDropdown ? styles.activeInput : ''}`}
                                    onClick={() => setShowToDropdown(true)}
                                >
                                    <span className={styles.labelSmall}>Destination</span>
                                    <div className={styles.dateDisplay}>
                                        <MapPin size={18} />
                                        <input
                                            type="text"
                                            className={styles.realInput}
                                            value={toCity}
                                            onChange={(e) => setToCity(e.target.value)}
                                            placeholder="Where are you going?"
                                        />
                                    </div>
                                </div>
                                {showToDropdown && renderCityDropdown(setToCity, () => setShowToDropdown(false))}
                            </div>

                            <div className={styles.inputWrapper} style={{ flex: 2 }} ref={dateDropdownRef}>
                                <div className={styles.inputRow}>
                                    <div
                                        className={`${styles.inputBox} ${showDateDropdown && activeDateInput === 'depart' ? styles.activeInput : ''}`}
                                        style={{ flex: 1, borderRight: 'none', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                                        onClick={() => { setActiveDateInput('depart'); setShowDateDropdown(true); }}
                                    >
                                        <span className={styles.labelSmall}>Check-in</span>
                                        <div className={styles.dateDisplay}>
                                            <strong>{formatDate(departDate)}</strong>
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.inputBox} ${showDateDropdown && activeDateInput === 'return' ? styles.activeInput : ''}`}
                                        style={{ flex: 1, borderLeft: '1px solid #eee', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                        onClick={() => { setActiveDateInput('return'); setShowDateDropdown(true); }}
                                    >
                                        <span className={styles.labelSmall}>Check-out</span>
                                        <div className={styles.dateDisplay}>
                                            <strong>{formatDate(returnDate)}</strong>
                                        </div>
                                    </div>
                                </div>

                                {showDateDropdown && (
                                    <div className={styles.dropdownModal} style={{ width: '600px', right: 0, left: 'auto', padding: 0, overflow: 'hidden' }}>
                                        <div className={styles.calendarContainer}>
                                            <div className={styles.calendarMonth}>
                                                <div className={styles.monthHeader}>
                                                    <button className={styles.navBtn}><ChevronLeft size={20} /></button>
                                                    <span>January 2026</span>
                                                </div>
                                                <div className={styles.daysGrid}>
                                                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className={styles.dayLabel}>{d}</div>)}
                                                    {generateCalendarDays(2026, 0).map((day, i) => (
                                                        <div key={i} className={`${styles.dayCell} ${isSelected(2026, 0, day) ? styles.selectedDay : ''} ${isRange(2026, 0, day) ? styles.rangeDay : ''}`} onClick={() => handleDateSelect(2026, 0, day)}>
                                                            {day}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className={styles.calendarMonth}>
                                                <div className={styles.monthHeader} style={{ justifyContent: 'flex-end' }}>
                                                    <span>February 2026</span>
                                                    <button className={styles.navBtn}><ChevronRight size={20} /></button>
                                                </div>
                                                <div className={styles.daysGrid}>
                                                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className={styles.dayLabel}>{d}</div>)}
                                                    {generateCalendarDays(2026, 1).map((day, i) => (
                                                        <div key={i} className={`${styles.dayCell} ${isSelected(2026, 1, day) ? styles.selectedDay : ''} ${isRange(2026, 1, day) ? styles.rangeDay : ''}`} onClick={() => handleDateSelect(2026, 1, day)} style={{ opacity: day ? 1 : 0 }}>
                                                            {day}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className={styles.inputWrapper} style={{ flex: 1.5 }} ref={passDropdownRef}>
                                <div className={styles.inputBox} onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}>
                                    <span className={styles.labelSmall}>Rooms & Guests</span>
                                    <div className={styles.dateDisplay}>
                                        <User size={16} />
                                        <span>1 Room, 2 Adults</span>
                                    </div>
                                </div>
                            </div>

                            <button className={styles.searchBtn} style={{ height: '64px', borderRadius: '4px' }} onClick={handleSearch} disabled={isSearching}>
                                {isSearching ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />} Search
                            </button>
                        </div>
                    </div>
                )}

                {activeTab !== 'flights' && activeTab !== 'hotels' && (
                    <div style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Search {activeTab}</h3>
                        <p>Coming Soon</p>
                    </div>
                )}
            </div>
        </div>
    );
}
