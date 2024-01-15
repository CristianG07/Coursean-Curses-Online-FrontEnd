import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { NavBar } from '../components/header/NavBar'
import { useNavbarContext } from '../context/NavbarContext'

export const Header = () => {
  const [countItemCart, setCountItemCart] = useState(0)
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
            <Link to='/' className='relative'>
              <MdOutlineShoppingCart size={25} />
              {countItemCart > 0 && (
                <span className='absolute -top-4 -right-2 bg-orange-500 px-2 text-center text-white rounded-full'>
                  {countItemCart}
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
