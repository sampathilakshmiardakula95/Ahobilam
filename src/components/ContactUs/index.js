import './index.css'

const ContactUs = () => (
  <div>
    <h1>Contact-Us:</h1>
    <hr />
    <div className="flex-container">
      <img src="https://ahobilam.net/images/images.jpg" alt="ahobilam" />
      <p>
        Ahobilam Malolan Tours and Religious India Pvt Ltd,
        <br />
        Mobile - +91 9701393075, +91 9440756375,
        <br />
        <br />
        E-Mail - komalvai@yahoo.com
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

export default ContactUs
