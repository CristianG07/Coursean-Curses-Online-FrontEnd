// Contexts
import { useCoursesContext } from '../../context/CoursesContex'
import { useTabsContext } from '../../context/TabsContext'
import {
  AWS,
  DATA_SCIENCE,
  DESIGN,
  MARKETING,
  PYTHON,
  WEB_DEVELOPMENT
} from '../../context/actions/actions'
import { Course } from './Course'

export const Tabs = () => {
  const {
    activeTab,
    isPython,
    isWebDevelopment,
    isDataScience,
    isAws,
    isDesign,
    isMarketing
  } = useTabsContext()
  const { courses } = useCoursesContext()

  return (
    <>
      <ul className='flex flex-wrap gap-2'>
        <li>
          <button className='tabsBtn hoverBtnBlack' onClick={() => isPython()}>
            {PYTHON}
          </button>
        </li>
        <li>
          <button
            className='tabsBtn hoverBtnBlack'
            onClick={() => isWebDevelopment()}
          >
            {WEB_DEVELOPMENT}
          </button>
        </li>
        <li>
          <button
            className='tabsBtn hoverBtnBlack'
            onClick={() => isDataScience()}
          >
            {DATA_SCIENCE}
          </button>
        </li>
        <li>
          <button className='tabsBtn hoverBtnBlack' onClick={() => isAws()}>
            {AWS}
          </button>
        </li>
        <li>
          <button className='tabsBtn hoverBtnBlack' onClick={() => isDesign()}>
            {DESIGN}
          </button>
        </li>
        <li>
          <button
            className='tabsBtn hoverBtnBlack'
            onClick={() => isMarketing()}
          >
            {MARKETING}
          </button>
        </li>
      </ul>

      {/* Filter Courses */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-8'>
        {courses.filter((course) => course.category === activeTab).map((course) => (
          <Course  key={course.id} {...course}/>
        ))}
      </div>
    </>
  )
}
