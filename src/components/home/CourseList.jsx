// components
import { Tabs } from './Tabs'
// context
export const CourseList = () => {

  return (
    <section className='containers'>
      <div className='grid gap-4 my-12'>
        <div className='grid gap-1'>
          <h4 className='text-2xl sm:text-3xl font-bold text-balance'>
            A Broad Selection Of Courses
          </h4>
          <p className='text-base sm:text-lg text-pretty'>
            Choose from 204,000 online video courses with new additions
            publihsed every month
          </p>
        </div>
        <Tabs />
      </div>
    </section>
  )
}
