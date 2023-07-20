import './index.css'

const HowToReach = () => (
  <div>
    <h1>How-To-Reach: </h1>
    <hr />
    <p className="tour-package-p">
      {' '}
      <span className="text">How far : </span>
      400Kms from Chennai, 363km from Hyderabad, 320Kms from Bangalore,
      262km.from Tirupati and 74km from Nandyal (Kurnool dist),
    </p>
    <div className="flex-container">
      <img src="https://ahobilam.net/images/flight.jpg" alt="flight" />
      <p className="tour-package-p">
        Hyderabad & Tirupati are the nearest airports.
      </p>
      <br />
    </div>
    <div className="flex-container">
      <img src="https://ahobilam.net/images/train.jpg" alt="trainn" />
      <p className="tour-package-p">
        Nandyal town (74 km. on Guntur-Hubli line) and Cuddapah ( 118 km. on
        Madras-Bombay line) are the convenient railheads.
      </p>
    </div>
    <div className="flex-container">
      <img src="https://ahobilam.net/images/bus.jpg" alt="bus" />
      <p className="tour-package-p">
        24 km. from Allagadda, which is connected by state buses from Hyderabad,
        Tirupati, Chittoor, Cuddapah, Kurnool, Nellore and Chennai.
      </p>
    </div>
    <div>
      <div className="footer-text">
        <p>
          RESIDENTIAL HOUSE AND A GUEST SUITE FOR SALE AT AHOBILAM .FOR MORE
          DETAILS CONTACT US @ 9701393075{' '}
        </p>
      </div>
      <div className="footer-back-color">
        <img
          src="https://ahobilam.net/images/facebook.png"
          alt="fb"
          className="logo-img"
        />
        <img
          src="https://ahobilam.net/images/yahoo.png"
          alt="yahoo"
          className="logo-img ml-1"
        />
        <img
          src="https://ahobilam.net/images/linkedin.png"
          alt="linked-in"
          className="logo-img ml-1"
        />
      </div>
    </div>
  </div>
)

export default HowToReach
