import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'

const STORAGE_KEY = 'loggedInUser'

function getStoredUser() {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function setStoredUser(user) {
  if (!user) {
    localStorage.removeItem(STORAGE_KEY)
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  }
}

function RequireAuth({ children }) {
  const user = getStoredUser()
  if (!user) {
    return <Navigate to="/login" replace />
  }
  return children
}

function Layout({ children, onLogout }) {
  const user = getStoredUser()
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Auth Demo</h1>
        <nav className="nav-links">
          {user && (
            <>
              <Link to="/home">Home</Link>
              <Link to="/profile">Profile</Link>
              <button className="link-button" onClick={onLogout}>
                Logout
              </button>
            </>
          )}
          {!user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
      <main className="app-main">{children}</main>
    </div>
  )
}

function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: '',
    password: '',
    fullName: '',
    email: '',
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.message || 'Registration failed')
        return
      }
      navigate('/login')
    } catch (err) {
      setError('Network error')
    }
  }

  return (
    <div className="card">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Username
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Full Name
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        {error && <p className="error-text">{error}</p>}
        <button type="submit" className="primary-button">
          Register
        </button>
      </form>
    </div>
  )
}

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.message || 'Login failed')
        return
      }
      const data = await res.json()
      setStoredUser({ username: data.username, id: data.id })
      navigate('/home')
    } catch (err) {
      setError('Network error')
    }
  }

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Username
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>
        {error && <p className="error-text">{error}</p>}
        <button type="submit" className="primary-button">
          Login
        </button>
      </form>
    </div>
  )
}

function Home() {
  const user = getStoredUser()
  return (
    <div className="card">
      <h2>Welcome</h2>
      <p>You are logged in as {user?.username}.</p>
      <p>Use the navigation above to view your profile.</p>
    </div>
  )
}

function Profile() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const user = getStoredUser()
    if (!user) {
      setLoading(false)
      setError('No logged-in user')
      return
    }
    const loadProfile = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/users/${encodeURIComponent(user.username)}`,
        )
        if (!res.ok) {
          setError('Failed to load profile')
          setLoading(false)
          return
        }
        const data = await res.json()
        setProfile(data)
      } catch (err) {
        setError('Network error')
      } finally {
        setLoading(false)
      }
    }
    loadProfile()
  }, [])

  if (loading) {
    return <p>Loading profile...</p>
  }

  if (error) {
    return <p className="error-text">{error}</p>
  }

  return (
    <div className="card">
      <h2>Profile</h2>
      <p>
        <strong>Username:</strong> {profile.username}
      </p>
      {profile.fullName && (
        <p>
          <strong>Full Name:</strong> {profile.fullName}
        </p>
      )}
      {profile.email && (
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
      )}
    </div>
  )
}

function App() {
  const navigate = useNavigate()

  const handleLogout = () => {
    setStoredUser(null)
    navigate('/login')
  }

  return (
    <Layout onLogout={handleLogout}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
