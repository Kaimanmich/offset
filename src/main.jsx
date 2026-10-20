import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'ui-kit/style.css';
import '@fontsource-variable/archivo/wdth.css';
import '@fontsource/geist-mono/400.css';
import '@fontsource/geist-mono/500.css';
import './styles/global.css';
import './styles/typography.css';
import './styles/animations.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
