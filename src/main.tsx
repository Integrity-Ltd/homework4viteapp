import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "primereact/resources/themes/md-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
