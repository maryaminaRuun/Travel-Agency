"use client";

import { useState } from 'react';
import { Check, X, Eye, Search, Filter, Clock, MapPin, Calendar, FileText, User, ChevronRight, MessageSquare } from 'lucide-react';

export default function AgentPage() {
    const [selectedTask, setSelectedTask] = useState<any>(null);
    const [tasks, setTasks] = useState([
        { id: 101, user: 'Maryama Somxchange', email: 'maryama@gmail.com', type: 'Visa Application', destination: 'France', status: 'Pending', date: '2026-01-13' },
        { id: 102, user: 'Sarah Connor', email: 'sarah@example.com', type: 'Flight Change', destination: 'Los Angeles', status: 'In Progress', date: '2026-01-12' },
        { id: 103, user: 'Bruce Wayne', email: 'bruce@gotham.com', type: 'Concierge Request', destination: 'Hong Kong', status: 'Pending', date: '2026-01-13' },
        { id: 104, user: 'Tony Stark', email: 'tony@stark.com', type: 'Cargo Clearance', destination: 'Dubai', status: 'Completed', date: '2026-01-10' },
    ]);

    const handleStatusChange = (id: number, newStatus: string) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
        if (selectedTask?.id === id) {
            setSelectedTask({ ...selectedTask, status: newStatus });
        }
    };

    return (
        <div style={{ position: 'relative', paddingBottom: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
                <div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Agent Workspace</h1>
                    <p style={{ opacity: 0.6, fontSize: '1.1rem' }}>Manage your assigned tasks and support requests</p>
                </div>
                <div style={{ background: 'white', padding: '0.75rem 1.5rem', borderRadius: '3rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '10px', height: '10px', background: 'hsl(var(--success))', borderRadius: '50%', boxShadow: '0 0 8px hsl(var(--success))' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em' }}>ACTIVE SESSION</span>
                </div>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                {[
                    { label: 'Assigned', count: tasks.length, icon: <FileText size={18} />, color: '#3b82f6' },
                    { label: 'Pending', count: tasks.filter(t => t.status === 'Pending').length, icon: <Clock size={18} />, color: '#f59e0b' },
                    { label: 'Completed', count: tasks.filter(t => t.status === 'Completed').length, icon: <Check size={18} />, color: '#10b981' },
                    { label: 'Messages', count: 12, icon: <MessageSquare size={18} />, color: '#8b5cf6' },
                ].map((stat, i) => (
                    <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ color: stat.color, background: `${stat.color}15`, width: '45px', height: '45px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {stat.icon}
                        </div>
                        <div>
                            <p style={{ fontSize: '0.85rem', opacity: 0.6, fontWeight: 600 }}>{stat.label}</p>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stat.count}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card" style={{ padding: '0' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.25rem' }}>Current Queue</h3>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <div style={{ position: 'relative' }}>
                            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} />
                            <input type="text" placeholder="Filter tasks..." style={{ padding: '0.5rem 1rem 0.5rem 2.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }} />
                        </div>
                        <button className="btn btn-outline" style={{ padding: '0.5rem', borderRadius: '8px' }}><Filter size={18} /></button>
                    </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead style={{ background: '#f8fafc' }}>
                            <tr>
                                <th style={{ padding: '1.25rem 1.5rem', color: '#64748b' }}>TASK ID</th>
                                <th style={{ padding: '1.25rem 1.5rem', color: '#64748b' }}>APPLICANT</th>
                                <th style={{ padding: '1.25rem 1.5rem', color: '#64748b' }}>SERVICE</th>
                                <th style={{ padding: '1.25rem 1.5rem', color: '#64748b' }}>DETAILS</th>
                                <th style={{ padding: '1.25rem 1.5rem', color: '#64748b' }}>STATUS</th>
                                <th style={{ padding: '1.25rem 1.5rem', color: '#64748b' }}>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr key={task.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.2s' }} className="hover-row">
                                    <td style={{ padding: '1.25rem 1.5rem', fontFamily: 'monospace', fontWeight: 700, color: 'hsl(var(--primary))' }}>#{task.id}</td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 600 }}>{task.user.charAt(0)}</div>
                                            <div>
                                                <p style={{ fontWeight: 600 }}>{task.user}</p>
                                                <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>{task.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 500 }}>{task.type}</td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', opacity: 0.7 }}>
                                            <MapPin size={14} /> {task.destination}
                                        </div>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <span style={{
                                            padding: '0.4rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            background: task.status === 'Pending' ? '#fffbeb' : (task.status === 'Completed' ? '#ecfdf5' : '#eff6ff'),
                                            color: task.status === 'Pending' ? '#d97706' : (task.status === 'Completed' ? '#059669' : '#2563eb'),
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}>
                                            {task.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button
                                                className="btn btn-outline"
                                                style={{ padding: '0.4rem', borderRadius: '8px' }}
                                                onClick={() => setSelectedTask(task)}
                                            >
                                                <Eye size={16} />
                                            </button>
                                            {task.status !== 'Completed' && (
                                                <button
                                                    className="btn btn-primary"
                                                    style={{ padding: '0.4rem', borderRadius: '8px' }}
                                                    onClick={() => handleStatusChange(task.id, 'Completed')}
                                                >
                                                    <Check size={16} />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Task Details Modal */}
            {selectedTask && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }} onClick={() => setSelectedTask(null)}>
                    <div className="card" style={{ width: '90%', maxWidth: '600px', padding: '2.5rem' }} onClick={(e) => e.stopPropagation()}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.75rem' }}>Task Details</h2>
                            <button onClick={() => setSelectedTask(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', opacity: 0.4 }}><X size={24} /></button>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '12px' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'hsl(var(--primary))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800 }}>{selectedTask.user.charAt(0)}</div>
                            <div>
                                <h3 style={{ marginBottom: '0.25rem' }}>{selectedTask.user}</h3>
                                <p style={{ opacity: 0.6 }}>{selectedTask.email}</p>
                            </div>
                        </div>

                        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div>
                                <p style={{ fontSize: '0.8rem', opacity: 0.5, fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Application Type</p>
                                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}><FileText size={16} color="hsl(var(--primary))" /> {selectedTask.type}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.8rem', opacity: 0.5, fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Destination</p>
                                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}><MapPin size={16} color="hsl(var(--primary))" /> {selectedTask.destination}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.8rem', opacity: 0.5, fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Submission Date</p>
                                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}><Calendar size={16} color="hsl(var(--primary))" /> {selectedTask.date}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.8rem', opacity: 0.5, fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Current Status</p>
                                <p style={{ fontWeight: 700, color: selectedTask.status === 'Completed' ? '#10b981' : '#f59e0b' }}>{selectedTask.status}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => handleStatusChange(selectedTask.id, 'Completed')}>Approve Application</button>
                            <button className="btn btn-outline" style={{ flex: 1, justifyContent: 'center', borderColor: '#ef4444', color: '#ef4444' }}>Reject Request</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
