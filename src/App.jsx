import { Route, Routes } from "react-router-dom"
import { Layout } from "./layout/Layout"
// pages
import { Cart, Courses, Home, SingleCourse } from "./pages"

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:id" element={<SingleCourse />} />
          <Route path="/category/:category" element={<Courses />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
