import './App.css'
import { LoginPage } from './components/login'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { HomePage } from './components/home'
import { RegisterPage } from './components/register'
import { AuthProvider } from './context/auth'
import { useAuth } from './hooks/useAuth'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

function ProtectedRoute({ children }: Props) {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return <Navigate to={'/'} replace />
  }
  return <>{children}</>
}

export function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<ProtectedRoute> <HomePage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}
