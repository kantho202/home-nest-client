import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './context/AuthProvider.jsx'
import { Bounce, ToastContainer } from 'react-toastify'
<<<<<<< HEAD
// import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

// const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
=======
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c


      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
<<<<<<< HEAD
    {/* </QueryClientProvider> */}
=======
    </QueryClientProvider>
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  </StrictMode>,
)
