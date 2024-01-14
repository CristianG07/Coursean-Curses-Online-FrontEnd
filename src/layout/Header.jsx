import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { NavBar } from '../components/header/NavBar'

export const Header = () => {
  const [countItemCart, setCountItemCart] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='shadow-md'>
      <nav className='flex items-center justify-between container mx-auto px-7 h-20'>
        <Link to='/' className='text-xl font-extrabold'>
          <span className='text-orange-400'>C</span>OURSEAN
        </Link>

        <div>
          <NavBar isOpen={isOpen} handleClick={handleClick} />
          <div className='flex items-center gap-5'>
            <Link to='/' className='relative'>
              <MdOutlineShoppingCart size={25} />
              {countItemCart > 0 && (
                <span className='absolute -top-4 -right-2 bg-orange-500 px-2 text-center text-white rounded-full'>
                  {countItemCart}
                </span>
              )}
            </Link>
            <button onClick={() => handleClick()}>
              <FaBars size={23} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
