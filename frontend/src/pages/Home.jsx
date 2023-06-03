import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "../shared/Subtitle";
import SearchBox from "../shared/SearchBox";
import Services from "../services/Services";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MansonryImagesGallery from "../components/image-gallery/MansonryImagesGallery";
import Testimonial from "../components/Testimonial/Testimonial";
import NewsLetter from "../shared/NewsLetter";
const Home = () => {
  return (
    <>
      {/* -------hero section-------*/}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Visit"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Travelling opens doors to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati dolore possimus aliquam cupiditate nostrum
                  repudiandae quaerat velit a illum tempora incidunt sapiente
                  quibusdam eligendi tenetur, consequatur unde fugiat similique
                  ratione.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>
            <SearchBox />
          </Row>
        </Container>
      </section>
      {/* -------hero section end------- */}
      {/* -------services section------- */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we offer</h5>
              <h2 className="services__title">We offer the best services</h2>
            </Col>
            <Services />
          </Row>
        </Container>
      </section>
      {/* -------services section end------- */}

      {/* -------featured Tours section -------*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore the world"} />
              <h2 className="featured__tour-title">
                Our Featured Tours Packages
              </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* -------featured Tours section end ------- */}
      {/* -------Experience section ------- */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2 className="experience__title">
                  Experience the best travel
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Obcaecati dolore possimus aliquam cupiditate nostrum
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15+</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* -------Experience section end ------- */}
      {/* --------gallery section -------  */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">Our Customers Tour Gallery</h2>
            </Col>
            <Col lg="12">
              <MansonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* -------gallery section end -------  */}
      {/* -------testimonial section ------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Testimonial"} />
              <h2 className="testimonial__title">
                What our clients say about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
      {/* -------testimonial section end ------- */}
      <NewsLetter />
    </>
  );
};

export default Home;
