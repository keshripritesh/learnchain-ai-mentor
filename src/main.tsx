import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './login.css'; // <- global import


createRoot(document.getElementById("root")!).render(<App />);
