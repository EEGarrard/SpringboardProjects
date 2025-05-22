import { useNavigate } from 'react-router-dom';
import './NavigateBackButton.css';

const NavigateBackButton = () => {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate(-1)} className="back-button">
      &larr; Go Back
    </button>
  );
};

export default NavigateBackButton;