import { useState } from 'react';

export default function Lab4Demo() {
  const [showAction, setShowAction] = useState(false);

  const styles = {
    container: { padding: '24px', maxWidth: '1200px', margin: '0 auto' },
    header: { backgroundColor: 'var(--primary-green)', color: 'white', padding: '16px 24px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    gridMetrics: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginTop: '24px' },
    cardMetric: { backgroundColor: 'white', padding: '16px', borderRadius: '8px', borderTop: '4px solid var(--primary-green)', boxShadow: 'var(--shadow-sm)' },
    value: { fontSize: '32px', fontWeight: 'bold', color: 'var(--primary-green)' },
    gridMain: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '24px' },
    card: { backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)' },
    badge: { backgroundColor: 'var(--pale-green)', color: 'var(--primary-green)', padding: '2px 8px', borderRadius: '12px', fontSize: '12px' },
    formInput: { width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid var(--border-color)', borderRadius: '4px' },
    btn: { backgroundColor: 'var(--primary-green)', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }
  };

  return (
    <div style={{ backgroundColor: 'var(--page-bg)', minHeight: '100vh', fontFamily: 'var(--font-family)' }}>
      <div style={styles.container}>
        
        <header style={styles.header}>
          <h1 style={{ margin: 0, fontSize: '24px' }}>⏱ TokTickt <span style={{ fontSize: '14px', fontWeight: 'normal', backgroundColor: 'rgba(0,0,0,0.2)', padding: '4px 8px', borderRadius: '4px' }}>Lab 4 Dashboard</span></h1>
          <span>Welcome back, Michael!</span>
        </header>

        <div style={styles.gridMetrics}>
          {[
            { label: "New", value: "14" },
            { label: "Open", value: "23" },
            { label: "In Progress", value: "18" },
            { label: "Waiting for Requester", value: "7" },
            { label: "My Assigned", value: "16" }
          ].map((metric, i) => (
            <div key={i} style={styles.cardMetric}>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{metric.label}</p>
              <p style={styles.value}>{metric.value}</p>
            </div>
          ))}
        </div>

        <div style={styles.gridMain}>
          
          <div style={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>
              <h2 style={{ margin: 0, fontSize: '18px', color: 'var(--primary-green)' }}>My Recent Tickets</h2>
              <a href="#" style={{ color: 'var(--primary-green)', textDecoration: 'none', fontSize: '14px' }}>View all</a>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[1, 2, 3].map((_, i) => (
                <li key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '8px' }}>
                  <div>
                    <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--primary-green)' }}>TKT-2025-00123</p>
                    <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Laptop battery drains quickly</p>
                  </div>
                  <span style={styles.badge}>In Progress</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>
              <h2 style={{ margin: 0, fontSize: '18px', color: 'var(--primary-green)' }}>Actions Taken</h2>
              <button onClick={() => setShowAction(!showAction)} style={styles.btn}>
                + Add Action
              </button>
            </div>
            
            {showAction && (
              <div style={{ backgroundColor: '#f9f9f9', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
                <input type="text" placeholder="Action Description" style={styles.formInput} />
                <input type="text" placeholder="Result" style={styles.formInput} />
                <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontSize: '14px' }}>
                  <input type="checkbox" style={{ marginRight: '8px' }} /> Follow-up Required?
                </label>
                <button style={{ ...styles.btn, width: '100%' }}>Save Action</button>
              </div>
            )}

            <div style={{ borderLeft: '4px solid var(--primary-green)', paddingLeft: '16px', paddingTop: '8px', paddingBottom: '8px' }}>
              <p style={{ margin: 0, color: '#666', fontSize: '12px' }}>Performed by Michael (IT Staff) - Just now</p>
              <p style={{ margin: '4px 0', fontWeight: 'bold' }}>Checked hardware and replaced battery</p>
              <p style={{ margin: 0, fontSize: '14px' }}>Result: Problem solved, ticket can be resolved.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}