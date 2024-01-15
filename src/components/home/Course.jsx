import { Link } from "react-router-dom"
// Data
import { courses } from "../../utils/data"
// Context
import { useTabsContext } from "../../context/TabsContext"

export const Course = () => {
  const { activeTab } = useTabsContext()

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
      {courses
        .filter((course) => course.category === activeTab)
        .map((course) => (
          <article
            key={course.id}
            className='border h-full shadow-md flex flex-col justify-between'
          >
            <div>
              <img
                src={course.image}
                alt={course.course_name}
                className='w-full object-cover'
              />
            </div>
            <div className='h-full p-5 grid items-center gap-1'>
              <h5 className='font-bold'>{course.course_name}</h5>
              <span className="text-gray-600 text-xs">{course.creator}</span>
              <div className="flex gap-2 items-center">
                <span className="text-amber-600">{course.rating_star}</span>
                <span className="text-gray-600 text-xs font-medium">({course.rating_count})</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-bold">${course.discounted_price}</span>
                <span className="text-gray-600 font-medium line-through">${course.actual_price}</span>
              </div>
              <div className='flex gap-2'>
                <Link
                  to={`/courses/${course.id}`}
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
        ))}
    </div>
  )
}
