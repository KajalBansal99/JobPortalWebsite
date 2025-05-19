import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    const completeUserData = {
      ...userData,
      fullname: userData.name || userData.email.split('@')[0],
      phoneNumber: userData.phoneNumber || '',
      profile: {
        bio: userData.bio || '',
        skills: userData.skills || [],
        resume: userData.resume || '',
        resumeOriginalName: userData.resumeOriginalName || ''
      }
    };
    setUser(completeUserData);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(completeUserData));
    return userData.role === 'student' ? '/student-dashboard' : '/recruiter-dashboard';
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
    return '/login';
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);