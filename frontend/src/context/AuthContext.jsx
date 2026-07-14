import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/auth' });

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const setToken = (token) => localStorage.setItem('token', token);
  const getToken = () => localStorage.getItem('token');
  const removeToken = () => localStorage.removeItem('token');

  const loadUser = useCallback(async () => {
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const { data } = await API.get('/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(data.user);
    } catch {
      removeToken();
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const register = async (name, email, password) => {
    const { data } = await API.post('/register', { name, email, password });
    setToken(data.token);
    setUser(data.user);
    return data;
  };

  const login = async (email, password) => {
    const { data } = await API.post('/login', { email, password });
    setToken(data.token);
    setUser(data.user);
    return data;
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
