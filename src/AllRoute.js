import { Route, Routes } from 'react-router-dom'
import App from './App'
import Books from './Books'

function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  )
}

export default AllRoute