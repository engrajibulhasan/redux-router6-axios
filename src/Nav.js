import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Link to="/">Home</Link> |{" "}
        <Link to="/books">Books</Link>
    </div>
  )
}

export default Nav