import { IoMdClose } from 'react-icons/io'
import { category_links } from '../../utils/data'
import { Link } from 'react-router-dom'

export const NavBar = ({ isOpen, handleClick }) => {
  return (
    <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} absolute min-w-[19rem] bg-white h-full top-0 right-0  z-10 shadow-lg py-5 px-8 duration-700`}>
      <div className='flex justify-end'>
        <button
          onClick={() => handleClick()}
          className='border-2 border-black rounded-full p-1 group hover:bg-black duration-700'
        >
          <IoMdClose size={20} className='group-hover:text-white' />
        </button>
      </div>
      <div className='mt-9'>
        <h3 className='font-bold text-xl'>Top Categories</h3>
        <ul className='grid gap-4 mt-6'>
          {category_links?.map((item, i) => (
            <li key={i} className='group'>
              <Link
                to={item.link}
                className='inline-block w-full text-sm font-medium group-hover:underline group-hover:underline-offset-[3px] group-hover:pl-2 duration-500'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}