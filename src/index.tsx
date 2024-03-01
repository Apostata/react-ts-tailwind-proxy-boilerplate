import "./main.css"
import React from 'react';
import App from '@/App'
import { createRoot } from 'react-dom/client';
const htmlElement = document.getElementById("root");
const root = createRoot(htmlElement!);
root.render(
  <App />
);