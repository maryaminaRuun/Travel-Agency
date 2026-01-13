import Link from 'next/link';
import Image from 'next/image';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <aside style={{
                width: '250px',
                borderRight: '1px solid var(--border)',
                padding: '2rem',
                background: 'hsl(var(--surface))'
            }}>
                <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Image
                        src="/logo.png"
                        alt="AirLink"
                        width={120}
                        height={40}
                        style={{ objectFit: 'contain' }}
                    />
                    <span style={{ fontSize: '0.8rem', opacity: 0.7, fontWeight: 600 }}>Workspace</span>
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link href="/applicant" className="btn btn-outline" style={{ width: '100%', justifyContent: 'flex-start' }}>Applicant</Link>
                    <Link href="/agent" className="btn btn-outline" style={{ width: '100%', justifyContent: 'flex-start' }}>Agent</Link>
                    <Link href="/admin" className="btn btn-outline" style={{ width: '100%', justifyContent: 'flex-start' }}>Admin</Link>
                    <hr style={{ margin: '1rem 0', borderColor: 'var(--border)' }} />
                    <Link href="/" style={{ opacity: 0.7 }}>&larr; Back to Home</Link>
                </nav>
            </aside>
            <main style={{ flex: 1, padding: '2rem' }}>
                {children}
            </main>
        </div>
    );
}
