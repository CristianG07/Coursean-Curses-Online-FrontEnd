import { useParams } from 'react-router-dom'
// contexts
import { useCoursesContext } from '../context/CoursesContex'
import { CourseDetail } from '../components/singleCourse.jsx/CourseDetail'
import { CardLearn } from '../components/singleCourse.jsx/CardLearn'
import { CourseContent } from '../components/singleCourse.jsx/CourseContent'

export const SingleCourse = () => {
  const { id } = useParams()
  const { courses } = useCoursesContext()

  return (
    <section>
      <div className=''>
        {courses
          .filter((course) => course.id === id)
          .map((course) => (
            <div
              key={course.id}
              className=''
            >
              <CourseDetail {...course} />
              <CardLearn {...course} />
              <CourseContent {...course}/>
            </div>
          ))}
      </div>
    </section>
  )
}
