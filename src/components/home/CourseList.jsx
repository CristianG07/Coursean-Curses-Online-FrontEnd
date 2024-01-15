// components
import { Tabs } from './Tabs'
import { Course } from './Course'

export const CourseList = () => {

  return (
    <section className='containers'>
      <div className='grid gap-4 my-12'>
        <div className='grid gap-1'>
          <h4 className='text-2xl sm:text-3xl font-bold'>
            A Broad Selection Of Courses
          </h4>
          <p className='text-base sm:text-lg'>
            Choose from 204,000 online video courses with new additions
            publihsed every month
          </p>
        </div>
        <Tabs />
        <Course />
      </div>
    </section>
  )
}
