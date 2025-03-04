import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '@/components/loading-page';

interface AuthMiddlewareProps {
  children: React.ReactNode;
}

const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('token');

    // Adicionando o atraso de 700ms
    const timer = setTimeout(() => {
      if (!token) {
        navigate('/');
      } else {
        setIsAuthorized(true);
      }
      setLoading(false);
    }, 1400); // 700ms de atraso

    return () => clearTimeout(timer); // Limpar o timer caso o componente seja desmontado

  }, [navigate]);

  if (loading) {
    return <LoadingPage />;
  }

  return <>{isAuthorized ? children : null}</>;
};

export default AuthMiddleware;
