import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Link to="/">Home</Link> | 
        <Link to="/books">Books</Link> | 
        <Link to="/users">Users</Link> | 
        <Link to="/posts">Posts</Link>
    </div>
  )
}

export default Nav