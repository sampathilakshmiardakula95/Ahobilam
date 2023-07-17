import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <div className="bg-container">
        <img
          src="https://media2.tarangarts.com/product_images/s1200__3476_1_1/brass-lakshmi-narasimha-idol.jpg"
          className="top-img1"
          alt="swamy-img"
        />
        <img
          src="https://1.bp.blogspot.com/-nUU9d8vkPYo/ULx4t7lLrJI/AAAAAAAAAC8/3BeU_IjX6sY/s1600/Untitled-3+copy.gif"
          className="top-img2"
          alt="three-namas"
        />
        <img
          src="https://i.pinimg.com/564x/b3/1e/3d/b31e3d981c21fee6a18035588d700bed.jpg"
          className="top-img3"
          alt="swamy-img"
        />
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="temple-history" className="nav-link">
            Temple-History
          </Link>
        </li>
        <li>
          <Link to="ahobilam-nava-narasimha" className="nav-link">
            Ahobilam-Nava-Narasimha
          </Link>
        </li>
        <li>
          <Link to="tour-package" className="nav-link">
            Tour-Package
          </Link>
        </li>
        <li>
          <Link to="accommodation" className="nav-link">
            Accommodation
          </Link>
        </li>
        <li>
          <Link to="photo-gallery" className="nav-link">
            Photo-Gallery
          </Link>
        </li>
        <li>
          <Link to="new-package-tariff" className="nav-link">
            New-Package-Tariff
          </Link>
        </li>
        <li>
          <Link to="payment" className="nav-link">
            Payment
          </Link>
        </li>
        <li>
          <Link to="how-to-reach" className="nav-link">
            How-To-Reach
          </Link>
        </li>
        <li>
          <Link to="contact-us" className="nav-link">
            Contact-Us
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
