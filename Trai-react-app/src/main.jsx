import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Welcome from './pages/Welcome.jsx'; // Ensure the component is capitalized
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Welcome /> {/* Use the capitalized component */}
  </StrictMode>
);