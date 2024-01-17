import { FaTrashAlt } from 'react-icons/fa'
import { useCartContext } from '../../context/CartContext'

export const CartItem = (props) => {
  const { courseID, image, course_name, creator, discounted_price, category } = props
  const { removeFromCart } = useCartContext();

  return (
    <div>
      <div className='border p-5 flex flex-col lg:flex-row gap-3'>
        <div className='min-w-[30%]'>
          <img src={image} alt={course_name} className='w-full object-cover' />
        </div>
        <div className='grid gap-3'>
          <div className='grid gap-2'>
            <h5 className='text-lg font-bold'>{course_name}</h5>
            <p className='text-xs'>{creator}</p>
            <span className='font-bold text-purple-600'>
              ${discounted_price}
            </span>
            <span className='bg-orange-500 text-white px-3 py-1 w-fit rounded-md text-xs font-bold'>
              {category}
            </span>
          </div>
          <button onClick={() => removeFromCart(courseID)} className='flex w-fit items-center gap-1 text-red-500 font-semibold'>
            Remove <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  )
}
