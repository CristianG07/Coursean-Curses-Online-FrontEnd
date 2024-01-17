import { BiCheck } from 'react-icons/bi'

export const CardLearn = (props) => {
  const { what_you_will_learn } = props

  return (
    <div className='max-w-[90%] md:max-w-[85%] mx-auto my-16'>
      <div className='border border-[#ccc] p-7 grid gap-5 text-pretty'>
        <h4 className='text-2xl md:text-3xl font-bold'>What you'll learn</h4>
        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {what_you_will_learn.map((item, i) => (
            <li
              key={i}
              className='flex items-center gap-2 text-xs font-medium text-gray-600'
            >
              <div>
                <BiCheck />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
