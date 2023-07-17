import './index.css'

const HowToReach = () => (
  <div>
    <h3>How-To-Reach: </h3>
    <hr />
    <p className="tour-package-p">
      {' '}
      <span className="text">How far : </span>
      400Kms from Chennai, 363km from Hyderabad, 320Kms from Bangalore,
      262km.from Tirupati and 74km from Nandyal (Kurnool dist),
    </p>
    <div className="flex-container">
      <img src="https://ahobilam.net/images/flight.jpg" />
      <p className="tour-package-p">
        Hyderabad & Tirupati are the nearest airports.
      </p>
      <br />
    </div>
    <div className="flex-container">
      <img src="https://ahobilam.net/images/train.jpg" />
      <p className="tour-package-p">
        Nandyal town (74 km. on Guntur-Hubli line) and Cuddapah ( 118 km. on
        Madras-Bombay line) are the convenient railheads.
      </p>
    </div>
    <div className="flex-container">
      <img src="https://ahobilam.net/images/bus.jpg" />
      <p className="tour-package-p">
        24 km. from Allagadda, which is connected by state buses from Hyderabad,
        Tirupati, Chittoor, Cuddapah, Kurnool, Nellore and Chennai.
      </p>
    </div>
  </div>
)

export default HowToReach
