import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import { NavBar } from '../components/header/NavBar'
import { useNavbarContext } from '../context/NavbarContext'
import { useCartContext } from '../context/CartContext'

export const Header = () => {
  const { total_items } = useCartContext()
  const { OpenNavbar } = useNavbarContext()

  return (
    <header className='shadow-md'>
      <nav className='containers flex items-center justify-between h-20'>
        <Link to='/' className='text-xl md:text-3xl font-extrabold'>
          <span className='text-orange-400'>C</span>OURSEAN
        </Link>

        <div>
          <NavBar />
          <div className='flex items-center gap-5'>
            <Link to='/cart' className='relative'>
              <MdOutlineShoppingCart size={25} />
              {total_items > 0 && (
                <span className='absolute text-center font-sans text-sm font-medium -top-4 -right-2 bg-orange-500 h-6 w-6 flex items-center justify-center text-white rounded-full'>
                  {total_items}
                </span>
              )}
            </Link>
            <button onClick={() => OpenNavbar()}>
              <FaBars size={23} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
