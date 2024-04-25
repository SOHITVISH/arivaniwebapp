import React, { useState, useRef } from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import contactHeader from "../img/contact-header.jpg";
import axios from 'axios';

const Contact = () => {
  const formRef = useRef();
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const [inputFields, setInputFields] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
 

  const validateValues = (inputValues) => {
    let errors = {};

    // if (inputValues.username.length < 3) {
    //   errors.username = "Username is too short";
    // }
    // if (inputValues.email.length < 5) {
    //   errors.email = "Email is too short";
    // }
    // if (inputValues.subject.length < 5) {
    //   errors.subject = "Subject is too short";
    // }
    // if (inputValues.message.length < 10) {
    //   errors.message = "Message is too short";
    // }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validateValues({ name, email, subject, message }));
    setSubmitting(true);

    try {
      console.log("inside api");
      const response = await axios.post('http://localhost:5000/api/createcontact', { name, email, subject, message });
      console.log(response, "__________________________hiii");
      console.log('Contact form submitted successfully:', response.data);
      setSuccess(true);
      // Clear input values after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
  };

  return (
    <>
      <style>
        {`
          .form-control {
            border-radius: 20px;
          }
        `}
      </style>
      <InnerHeader />
      <InnerHeaderBanner name={"Contact Us"} img={contactHeader} />
      <main id="main">
        <section id="contact" className="contact">
          <div className="container position-relative" data-aos="fade-up">
            <div className="section-header">
              <h2>Feel Free To Call Us!</h2>
            </div>
            <div className="row gy-4 d-flex justify-content-end">
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>Location:</h4>
                    <h5>India:</h5>
                    <p>Vikas Nagar Lucknow, Uttar Pradesh, India 226026.</p>
                    <br />
                    <h5>U.S.A:</h5>
                    <p>P.O.Box No 95114, US XYZ, USA</p>
                  </div>
                </div>
                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>Email:</h4>
                    <p><a href="mailto:admin@arivani.com">admin@arivani.com</a></p>
                  </div>
                </div>
                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Call:</h4>
                    <p>9140501084</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                <form ref={formRef} className="php-email-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        ref={usernameRef}
                        onChange={(e)=>{setName(e.target.value)}}
                        value={name}
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Your Name"
                        style={{ border: errors.username ? "1px solid red" : null }}
                      />
                      {errors.username && <small className="error">{errors.username}</small>}
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        ref={emailRef}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={email}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="E-mail"
                        style={{ border: errors.email ? "1px solid red" : null }}
                      />
                      {errors.email && <small className="error">{errors.email}</small>}
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      ref={subjectRef}
                      onChange={(e)=>{setSubject(e.target.value)}}
                      value={subject}
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      style={{ border: errors.subject ? "1px solid red" : null }}
                    />
                    {errors.subject && <small className="error">{errors.subject}</small>}
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      ref={messageRef}
                      onChange={(e)=>{setMessage(e.target.value)}}
                      value={message}
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      style={{ border: errors.message ? "1px solid red" : null }}
                    ></textarea>
                    {errors.message && <small className="error">{errors.message}</small>}
                  </div>
                  <div className="text-center">
                    {success && <div className="alert alert-success p-2">Message sent successfully!</div>}
                    <button className="btn btn-primary" type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
