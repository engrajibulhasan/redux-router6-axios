import { Route, Routes } from 'react-router-dom'
import App from './App'
import Books from './components/Books'
import Posts from './components/Posts'
import Users from './components/Users'

function AllRoute() {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/books" element={<Books />} />
      <Route exact path="/users" element={<Users />} />
      <Route exact path="/posts" element={<Posts />} />
    </Routes>
  )
}

export default AllRoute