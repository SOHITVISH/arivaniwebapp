import React from "react";
import career from "../img/careers-img.jpg";
import careerHeader from "../img/blog-header.jpg";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";

const Career = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Careers"} img={careerHeader} />

      <main id="main">
        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                Do what you LOVE, Inviting you to build a great future with us
              </h2>
            </div>

            <div className="row gy-4 blog-details">
              <div className="col-lg-6">
                <img
                  src={career}
                  className="img-fluid"
                  alt="Do what you LOVE, Inviting you to build a great future with us"
                  title="Do what you LOVE, Inviting you to build a great future with us"
                />
              </div>
              <div className="col-lg-6">
                <p>
                  People! An essential part of any successful business, drive
                  the Organization in the right direction. With our accelerated
                  business expansion, we are always on the lookout for a
                  talented pool of resources to grow with our organization.
                </p>
                <p>
                  We look at talent with a long-term plan where they can be
                  groomed for different roles People with the right attitude and
                  great aspirations. At Arivani Technologies, we have an exciting work
                  atmosphere with exceptional growth opportunities.
                </p>
                <div className="content">
                  <blockquote>
                    <p>
                      Please send your resumes to <br></br> 
                      <a href="mailto: hr@arivani.net">
                       hr@arivani.net
                      </a>
                    </p>
                   
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="row gy-4">
              <div className="col-lg-4">
                <div
                  className="card my-3"
                  style={{
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">ReactJS Developer</h5>
                    <p className="card-text">
                      We are looking for an experienced ReactJS Developer to
                      join our team. Responsibilities include developing
                      user-facing features using React.js, building reusable
                      components and front-end libraries
                    </p>
                    <a href="#" className="btn btn-primary">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="card my-3"
                  style={{
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">MERN Developer</h5>
                    <p className="card-text">
                      We are seeking a skilled MERN Stack Developer to join our
                      development team. The ideal candidate will have experience
                      building scalable web applications using MongoDB,
                      Express.js, React.js, and Node.js.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="card my-3"
                  style={{
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Software Engineer</h5>
                    <p className="card-text">
                      We are hiring Software Engineers to contribute to the
                      development of our software solutions. The role involves
                      designing, coding, testing, and deploying software
                      applications and systems.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Career;

