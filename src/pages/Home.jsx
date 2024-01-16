import { CategoriesList } from "../components/home/CategoriesList"
import { CourseList } from "../components/home/CourseList"
import { Hero } from "../components/home/Hero"

export const Home = () => {
  return (
    <>
      <Hero />
      <CourseList />
      <CategoriesList />
    </>
  )
}