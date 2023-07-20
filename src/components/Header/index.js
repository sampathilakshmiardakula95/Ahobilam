import {NavLink} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <div className="blog-title">
        <div className="img-container">
          <img
            src="https://media2.tarangarts.com/product_images/s1200__3476_1_1/brass-lakshmi-narasimha-idol.jpg"
            alt="ahobilam"
            className="top-img1"
          />
          <img
            src="https://1.bp.blogspot.com/-nUU9d8vkPYo/ULx4t7lLrJI/AAAAAAAAAC8/3BeU_IjX6sY/s1600/Untitled-3+copy.gif"
            alt="ahobilam"
            className="top-img2"
          />
          <img
            src="https://i.pinimg.com/564x/b3/1e/3d/b31e3d981c21fee6a18035588d700bed.jpg"
            alt="ahobilam"
            className="top-img3"
          />
        </div>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/temple-history" className="nav-link">
            TempleHistory
          </NavLink>
        </li>
        <li>
          <NavLink to="/ahobilam-nava-narasimha" className="nav-link">
            AhobilamNavaNarasimha
          </NavLink>
        </li>
        <li>
          <NavLink to="/tour-package" className="nav-link">
            TourPackage
          </NavLink>
        </li>
        <li>
          <NavLink to="/accommodation" className="nav-link">
            Accommodation
          </NavLink>
        </li>
        <li>
          <NavLink to="/photo-gallery" className="nav-link">
            PhotoGallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-package-tariff" className="nav-link">
            NewPackageTariff
          </NavLink>
        </li>
        <li>
          <NavLink to="/payment" className="nav-link">
            Payment
          </NavLink>
        </li>
        <li>
          <NavLink to="/how-to-reach" className="nav-link">
            HowToReach
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" className="nav-link">
            ContactUs
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
