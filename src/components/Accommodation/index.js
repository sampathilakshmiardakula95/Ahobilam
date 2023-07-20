import './index.css'

const Accommodation = () => (
  <div>
    <h1>ACCOMMODATION : </h1>
    <hr />
    <div className="flex-container ml-5 mt-3">
      <img
        src="https://ahobilam.net/images/accom4.jpg"
        alt="ahobilam"
        className="accommodation-align"
      />
      <div className="d-flex flex-column accommodation-align">
        <h1 className="heading1">The Best Devotional Experience Guaranteed!</h1>
        <p className="tour-package-p">
          We know through over 15 years experience that good accommodation on
          pilgrim tour is key to a great devotional experience. Unlike others,
          we are not tied exclusively to any hotel chain, so we are providing
          very best and pleasant stay.
          <br />
          Dorm accommodation is guaranteed on all tours, simply pay as you go!
          We use only the best accommodation. All have great facilities, and
          have top quality catering kitchens facilities.
        </p>
      </div>
    </div>
    <div className="flex-container ml-5 mt-3">
      <img
        src="https://ahobilam.net/images/accom5.jpg"
        alt="ahobilam"
        className="accommodation-align"
      />
      <div className="d-flex flex-column accommodation-align">
        <h1 className="heading1 ">Accommodation Upgrades Available</h1>
        <p className="tour-package-p">
          If you want to treat yourselves or enjoy more privacy, private twin
          and double rooms are available. Please be sure to let us know when
          making your reservation, or at least 7 days in advance of your
          departure, as we cannot always guarantee availability.
          <br /> The cost per room for a private room will range from Indian
          Rupee Symbol1500- Indian Rupee Symbol1800 - 2000 depending on the
          seasonality
        </p>
      </div>
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
          alt="ahobilam"
          className="logo-img"
        />
        <img
          src="https://ahobilam.net/images/yahoo.png"
          alt="ahobilam"
          className="logo-img ml-1"
        />
        <img
          src="https://ahobilam.net/images/linkedin.png"
          alt="ahobilam"
          className="logo-img ml-1"
        />
      </div>
    </div>
  </div>
)

export default Accommodation
