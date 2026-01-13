"use client";

import { Users, DollarSign, UserCheck, Activity, Search, Filter, MoreVertical, Shield, Briefcase, User as UserIcon } from 'lucide-react';
import { useState } from 'react';

export default function AdminPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const users = [
        { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Applicant', status: 'Active', joined: '2025-10-12' },
        { id: 2, name: 'Bob Jones', email: 'bob@agent.so', role: 'Agent', status: 'Active', joined: '2025-11-05' },
        { id: 3, name: 'Charlie Brown', email: 'charlie@gmail.com', role: 'Applicant', status: 'Pending', joined: '2026-01-02' },
        { id: 4, name: 'Diana Prince', email: 'admin@airlink.so', role: 'Admin', status: 'Active', joined: '2024-05-20' },
        { id: 5, name: 'Edward Norton', email: 'edward@example.com', role: 'Agent', status: 'Suspended', joined: '2025-08-15' },
    ];

    const stats = [
        { label: 'Total Users', value: '1,284', icon: <Users size={20} />, color: '#3b82f6', trend: '+12%' },
        { label: 'Revenue', value: '$45,200', icon: <DollarSign size={20} />, color: '#10b981', trend: '+8%' },
        { label: 'Active Agents', value: '156', icon: <UserCheck size={20} />, color: '#f59e0b', trend: '+5%' },
        { label: 'System Health', value: '99.9%', icon: <Activity size={20} />, color: '#8b5cf6', trend: 'Stable' },
    ];

    return (
        <div style={{ paddingBottom: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Admin Console</h1>
                    <p style={{ opacity: 0.6, fontSize: '1.1rem' }}>Global system overview and user management</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Activity size={18} /> System Reports
                    </button>
                    <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Search size={18} /> Add User
                    </button>
                </div>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                {stats.map((stat, i) => (
                    <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative', overflow: 'hidden' }}>
                        <div style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '-10px',
                            background: stat.color,
                            opacity: 0.1,
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%'
                        }} />
                        <div style={{ color: stat.color, background: `${stat.color}15`, width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                            {stat.icon}
                        </div>
                        <p style={{ opacity: 0.6, fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</p>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 800 }}>{stat.value}</h3>
                            <span style={{ fontSize: '0.85rem', color: stat.trend.includes('+') ? '#10b981' : '#64748b', fontWeight: 600 }}>{stat.trend}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                {/* User Management */}
                <div className="card" style={{ padding: '0' }}>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Users size={20} color="hsl(var(--primary))" /> User Management
                        </h3>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <div style={{ position: 'relative' }}>
                                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} />
                                <input
                                    type="text"
                                    placeholder="Search users..."
                                    style={{ padding: '0.5rem 1rem 0.5rem 2.5rem', borderRadius: '20px', border: '1px solid #e2e8f0', fontSize: '0.85rem', outline: 'none' }}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-outline" style={{ padding: '0.5rem', borderRadius: '10px' }}>
                                <Filter size={18} />
                            </button>
                        </div>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead style={{ background: '#f8fafc' }}>
                                <tr>
                                    <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}>User</th>
                                    <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}>Role</th>
                                    <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}>Joined</th>
                                    <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}>Status</th>
                                    <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase())).map((user) => (
                                    <tr key={user.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1rem 1.5rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'hsl(var(--primary))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem' }}>
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p style={{ fontWeight: 600 }}>{user.name}</p>
                                                    <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ padding: '1rem 1.5rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                                {user.role === 'Admin' ? <Shield size={14} color="#ef4444" /> : user.role === 'Agent' ? <Briefcase size={14} color="#3b82f6" /> : <UserIcon size={14} color="#64748b" />}
                                                {user.role}
                                            </div>
                                        </td>
                                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.9rem', opacity: 0.7 }}>{user.joined}</td>
                                        <td style={{ padding: '1rem 1.5rem' }}>
                                            <span style={{
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '20px',
                                                fontSize: '0.75rem',
                                                fontWeight: 700,
                                                background: user.status === 'Active' ? '#dcfce7' : user.status === 'Pending' ? '#fef9c3' : '#fee2e2',
                                                color: user.status === 'Active' ? '#166534' : user.status === 'Pending' ? '#854d0e' : '#991b1b',
                                            }}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                                            <button style={{ border: 'none', background: 'none', cursor: 'pointer', opacity: 0.3 }}><MoreVertical size={18} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* System Logs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="card">
                        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Activity size={18} color="#8b5cf6" /> System Activity
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { msg: 'Server backup completed', time: '2 mins ago', type: 'success' },
                                { msg: 'New agent registered: Bob Jones', time: '1 hour ago', type: 'info' },
                                { msg: 'Failed login attempt from IP 192.168.1.1', time: '3 hours ago', type: 'warning' },
                                { msg: 'Visa module updated to v2.4', time: '1 day ago', type: 'info' },
                            ].map((log, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #f8fafc' }}>
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: log.type === 'success' ? '#10b981' : log.type === 'warning' ? '#ef4444' : '#3b82f6',
                                        marginTop: '5px'
                                    }} />
                                    <div>
                                        <p style={{ fontSize: '0.9rem', fontWeight: 500 }}>{log.msg}</p>
                                        <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>{log.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', color: 'white' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'white' }}>Storage Usage</h3>
                        <div style={{ background: 'rgba(255,255,255,0.1)', height: '10px', borderRadius: '5px', marginBottom: '0.5rem', position: 'relative' }}>
                            <div style={{ background: 'hsl(var(--primary))', width: '65%', height: '100%', borderRadius: '5px' }} />
                        </div>
                        <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>65% of 500GB used (325GB)</p>
                        <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center', background: 'white', color: '#0f172a' }}>Upgrade Plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
