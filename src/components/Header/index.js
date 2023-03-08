import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
      alt="wave"
    />
    <h1>My Blog</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
