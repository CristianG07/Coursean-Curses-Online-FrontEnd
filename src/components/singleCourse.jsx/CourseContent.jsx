export const CourseContent = (props) => {
  const { content } = props

  return (
    <div className='max-w-[90%] md:max-w-[85%] mx-auto my-16'>
      <div className='border border-[#ccc] p-7 grid gap-5 text-pretty font-bold'>
        <h4 className='text-2xl md:text-3xl'>Course content</h4>
        <ul className='grid gap-5'>
          {content.map((item, i) => (
            <li key={i} className='flex gap-3 text-sm border border-[#C6C7C8] bg-gray-100 px-5 py-3'>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}