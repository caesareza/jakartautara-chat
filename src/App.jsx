import "./App.css"
import { Routes, Route, Link, Outlet } from "react-router-dom"
import OnBoard from "./pages/OnBoard"

const Layout = () => (
  <main className="w-full h-full mx-auto p-10">
    <Outlet />
  </main>
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<OnBoard />} index />
      </Route>
    </Routes>
  )
}

export default App
