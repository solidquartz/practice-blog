import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      
      <h1>Aky's React Blog</h1>

      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/create">New Post</Link>
      </div>

    </nav>
  )
}

export default Navbar;