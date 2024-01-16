import { Link } from "react-router-dom"
import { useCoursesContext } from "../../context/CoursesContex"
import { categories_images } from "../../utils/images"

export const CategoriesList = () => {
  const { categories } = useCoursesContext()
  return (
    <section className="containers grid gap-14 pt-20 pb-5">
      <h4 className='text-2xl sm:text-4xl font-bold text-balance'>Top Categories</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {categories.map((category, i) => (
          <Link key={i} to={`/category/${category}`} className="cardCategory">
            <img src={categories_images[i]} alt={category} className="max-w-28 mx-auto" />
            <h6 className="font-bold">{category}</h6>
          </Link>
        ))}
      </div>
    </section>
  )
}