import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavigateBackButton.css'

export default function NavigateBackButton() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
      return (
    <button onClick={handleGoBack} className='back-button' aria-label='Go back to previous page'>← Back</button>
  )
}
