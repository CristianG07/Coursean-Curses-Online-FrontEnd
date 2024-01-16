import { Link } from 'react-router-dom'
// icons
import { MdInfo } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import { FaShoppingCart } from 'react-icons/fa'
import { RiClosedCaptioningFill } from 'react-icons/ri'
// components
import { StarRating } from '../home/StarRating'

export const CourseDetail = (props) => {
  const { id, image, course_name, category, description, rating_star, rating_count, students, creator,  updated_date, lang, discounted_price, actual_price } = props

  return (
    <div className='bg-black py-20'>
      <div key={id} className='text-white max-w-[90%] md:max-w-[85%] mx-auto'>
        <div className='flex flex-col lg:flex-row-reverse gap-5 lg:gap-3'>
          <div className='w-full xl:w-[85%]'>
            <img
              src={image}
              alt={course_name}
              className='w-full object-cover'
            />
          </div>
          <div className='grid gap-3'>
            <div className='flex flex-col gap-3 text-pretty'>
              <span className='w-fit px-3 text-xs font-semibold py-[3px] bg-pink-50 text-black rounded-md'>
                {category}
              </span>
              <h2 className='text-3xl md:text-4xl font-bold'>{course_name}</h2>
              <p>{description}</p>
            </div>
            <div>
              <div className='flex gap-2 items-center'>
                <span className='text-amber-600 text-lg font-bold'>
                  {rating_star}
                </span>
                <div className='text-sm sm:text-md'>
                  <StarRating rating_star={rating_star} />
                </div>
                <span className='text-xs sm:text-md text-purple-400 font-medium'>
                  ({rating_count})
                </span>
                <span className='text-xs sm:text-md text-gray-200 font-medium'>
                  {students}
                </span>
              </div>
              <p className='text-gray-300 text-sm'>{creator}</p>
            </div>
            <div className='grid gap-1'>
              <div className='flex items-center gap-2'>
                <MdInfo />
                <p>Last Updated {updated_date}</p>
              </div>
              <div className='flex items-center gap-2'>
                <TbWorld />
                <p>{lang}</p>
              </div>
              <div className='flex items-center gap-2'>
                <RiClosedCaptioningFill />
                <p>{lang} [Auto]</p>
              </div>
            </div>
            <div className='grid gap-4'>
              <div className='flex items-center gap-3'>
                <span className='font-extrabold text-2xl'>
                  ${discounted_price}
                </span>
                <span className='font-bold text-2xl line-through text-yellow-200'>
                  ${actual_price}
                </span>
              </div>
              <Link
                to={'/cart'}
                className='flex w-fit items-center gap-2 px-6 py-3 bg-purple-500'
              >
                <FaShoppingCart />
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
