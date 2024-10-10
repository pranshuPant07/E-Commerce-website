import React, { useState } from 'react'
import ContactUsPOPUP from '../Components/PopUps/ContactUsPOPUP'


function Contactus() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Subject,setSubject]=useState('');
  const [Message,setMessage]=useState('');  
  const [ShowModal, setShowModal] = useState(false)

  function nameonchange(e) {
    setName(e.target.value)
  }
  function emailonchange(e) {
    setEmail(e.target.value)
  }
  function subjectonchange(e) {
    setSubject(e.target.value)
  }
  function messageonchange(e) {
    setMessage(e.target.value)
  }
  function sendMessage_Clicked(e) {
    if (Name.length && Email.length && Subject.length && Message.length != 0) {
      setShowModal(true);
    }
    else {
      alert('fill the feilds')
    }
    e.preventDefault();
  }
  return (<>
    <>
      {/* Contact Start */}
      <div className="container-fluid">

        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Contact Us</span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5">
            <div className="contact-form bg-light p-30">
              {/* <div id="success" /> */}
              <form name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                    onChange={nameonchange}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                    onChange={emailonchange}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                    onChange={subjectonchange}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                    defaultValue={""}
                    onChange={messageonchange}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                    onClick={sendMessage_Clicked}
                  >
                    Send Message
                  </button>
                </div>

              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <div className="bg-light p-30 mb-30">
              <iframe
                style={{ width: "100%", height: 250 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9676470447207!2d77.02699707533431!3d28.60074737568216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dd61eb460af%3A0xe89377d97456bc5e!2sVegas%20Mall!5e0!3m2!1sen!2sin!4v1711995948414!5m2!1sen!2sin"
                frameBorder={0}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
            <div className="bg-light p-30 mb-3">
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary mr-3" />
                921, Floor 9, Vegas Mall, Dwarka, New Delhi, INDIA
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary mr-3" />
                contactUs@MultiShop.com
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt text-primary mr-3" />
                +91 70070 00700
              </p>
            </div>
          </div>
        </div>
        {ShowModal && < ContactUsPOPUP Name={Name} Email={Email} onClose={() => setShowModal(false)} />}

      </div>
      {/* Contact End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </>

  </>
  )
}

export default Contactus

