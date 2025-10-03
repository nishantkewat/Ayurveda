import { useState } from 'react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'theayurvedaworldofficial@gmail.com' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials! Use: theayurvedaworldofficial@gmail.com / admin123');
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{ padding: 20, fontFamily: 'Arial', minHeight: '100vh', background: '#f0f9f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'white', padding: 40, borderRadius: 15, boxShadow: '0 10px 30px rgba(0,0,0,0.1)', maxWidth: 400, width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 30 }}>
            <h1 style={{ color: '#059669', margin: 0 }}>🌿 The Ayurveda World</h1>
            <p style={{ color: '#666', marginTop: 5 }}>Owner Login</p>
          </div>
          
          <form onSubmit={handleLogin}>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: 12, margin: '10px 0', border: '1px solid #ddd', borderRadius: 8, fontSize: 16 }}
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: 12, margin: '10px 0', border: '1px solid #ddd', borderRadius: 8, fontSize: 16 }}
              required
            />
            <button 
              type="submit"
              style={{ width: '100%', padding: 15, background: '#059669', color: 'white', border: 'none', borderRadius: 8, fontSize: 16, fontWeight: 'bold', cursor: 'pointer' }}
            >
              🔐 Login to Dashboard
            </button>
          </form>
          
          <div style={{ marginTop: 25, padding: 15, background: '#f8fafc', borderRadius: 8, fontSize: 14, color: '#666' }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Demo Credentials:</p>
            <p style={{ margin: '5px 0' }}>📧 theayurvedaworldofficial@gmail.com</p>
            <p style={{ margin: 0 }}>🔑 admin123</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Arial', minHeight: '100vh', background: '#f8fafc' }}>
      <header style={{ background: '#059669', color: 'white', padding: '20px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 24 }}>🌿 The Ayurveda World</h1>
              <p style={{ margin: 5, opacity: 0.9 }}>Owner Dashboard</p>
            </div>
            <button onClick={() => setIsLoggedIn(false)} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '8px 16px', borderRadius: 6, cursor: 'pointer' }}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <nav style={{ background: 'white', padding: '15px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['dashboard', 'products', 'orders', 'settings'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ background: activeTab === tab ? '#10b981' : 'transparent', color: activeTab === tab ? 'white' : '#374151', border: 'none', padding: '10px 20px', borderRadius: 6, cursor: 'pointer', textTransform: 'capitalize' }}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 1200, margin: '20px auto', padding: '0 20px' }}>
        {activeTab === 'dashboard' && (
          <div>
            <h2>📊 Dashboard Overview</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20, marginBottom: 30 }}>
              <div style={{ background: 'white', padding: 25, borderRadius: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h3 style={{ color: '#059669', margin: '0 0 10px 0' }}>Total Revenue</h3>
                <p style={{ fontSize: 24, fontWeight: 'bold', margin: 0 }}>₹24,599</p>
              </div>
              <div style={{ background: 'white', padding: 25, borderRadius: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h3 style={{ color: '#059669', margin: '0 0 10px 0' }}>Total Products</h3>
                <p style={{ fontSize: 24, fontWeight: 'bold', margin: 0 }}>42</p>
              </div>
              <div style={{ background: 'white', padding: 25, borderRadius: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h3 style={{ color: '#059669', margin: '0 0 10px 0' }}>Pending Orders</h3>
                <p style={{ fontSize: 24, fontWeight: 'bold', margin: 0 }}>8</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2>⚙️ Owner Settings</h2>
            <div style={{ background: 'white', padding: 25, borderRadius: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ marginBottom: 20 }}>
                <h3 style={{ color: '#059669' }}>👑 Owner Information</h3>
                <p><strong>Email:</strong> theayurvedaworldofficial@gmail.com</p>
                <p><strong>Role:</strong> Supreme Administrator</p>
                <p><strong>Status:</strong> <span style={{ color: '#059669' }}>🟢 Active</span></p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
                }
