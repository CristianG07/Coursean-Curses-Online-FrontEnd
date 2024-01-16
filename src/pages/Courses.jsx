import { useParams } from 'react-router-dom'
import { useCoursesContext } from '../context/CoursesContex'
import { Course } from '../components/home/Course'

export const Courses = () => {
  const { category } = useParams()
  const { courses } = useCoursesContext()
  return (
    <section className='containers my-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-8'>
        {courses
          .filter((course) => course.category === category)
          .map((course) => (
            <Course key={course.id} {...course} />
          ))}
      </div>
    </section>
  )
}
