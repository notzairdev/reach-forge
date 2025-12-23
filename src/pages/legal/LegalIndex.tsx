import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LegalIndex = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/legal/privacy', { replace: true });
  }, [navigate]);

  return null;
};

export default LegalIndex;
