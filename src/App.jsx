import { Route, Routes } from "react-router-dom"
import { Layout } from "./layout/Layout"
import { Courses, Home, SingleCourse } from "./pages"

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:id" element={<SingleCourse />} />
          <Route path="/category/:category" element={<Courses />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
