import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import BrowserRouter
import { BrowserRouter } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// Import Contexts
import { NavbarProvider } from './context/NavbarContext.jsx'
import { TabsProvider } from './context/TabsContext.jsx'
import { CoursesProvider } from './context/CoursesContex.jsx'
import { CartProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CoursesProvider>
      <CartProvider>
        <NavbarProvider>
          <TabsProvider>
            <App />
          </TabsProvider>
        </NavbarProvider>
      </CartProvider>
    </CoursesProvider>
  </BrowserRouter>
)
