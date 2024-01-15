// Contexts
import { useTabsContext } from '../../context/TabsContext'
import {
  AWS,
  DATA_SCIENCE,
  DESIGN,
  MARKETING,
  PYTHON,
  WEB_DEVELOPMENT
} from '../../context/actions/actions'

export const Tabs = () => {
  const {
    isPython,
    isWebDevelopment,
    isDataScience,
    isAws,
    isDesign,
    isMarketing
  } = useTabsContext()

  return (
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
        <button className='tabsBtn hoverBtnBlack' onClick={() => isMarketing()}>
          {MARKETING}
        </button>
      </li>
    </ul>
  )
}
