import { Link } from 'react-router-dom'
// Context
import { StarRating } from './StarRating'

export const Course = (props) => {
  const { id, image, course_name, creator, actual_price, discounted_price, rating_count, rating_star } = props

  return (
    <>
      <article
        key={id}
        className='border h-full shadow-md flex flex-col justify-between'
      >
        <div>
          <img src={image} alt={course_name} className='w-full object-cover' />
        </div>
        <div className='h-full p-5 grid items-center gap-1'>
          <h5 className='font-bold text-pretty'>{course_name}</h5>
          <span className='text-gray-600 text-xs'>{creator}</span>
          <div className='flex gap-2 items-center'>
            <span className='text-amber-600 font-bold'>{rating_star}</span>
            <StarRating rating_star={rating_star} />
            <span className='text-gray-600 text-xs font-medium'>
              ({rating_count})
            </span>
          </div>
          <div className='flex gap-2 items-center'>
            <span className='font-bold'>${discounted_price}</span>
            <span className='text-gray-600 font-medium line-through'>
              ${actual_price}
            </span>
          </div>
          <div className='flex gap-2'>
            <Link
              to={`/courses/${id}`}
              className='tabsBtn hoverBtnBlack font-bold text-xs md:text-base'
            >
              See details
            </Link>
            <Link
              to='/cart'
              className='tabsBtn hoverBtnWhite bg-black text-white font-bold text-xs md:text-base'
            >
              Add to cart
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
