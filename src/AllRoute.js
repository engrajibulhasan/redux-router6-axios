import { Route, Routes } from 'react-router-dom'
import App from './App'
import Books from './components/Books'
import PostDetail from './components/PostDetail'
import Posts from './components/Posts'
import Users from './components/Users'

function AllRoute() {
  return (
    <Routes>
      <Route exact path="/books" element={<Books />} />
      <Route exact path="/users" element={<Users />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/post-detail/:id" element={<PostDetail />} />
      <Route path="/" element={<App />} />
    </Routes>
  )
}

export default AllRoute