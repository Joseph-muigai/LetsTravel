import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import SearchBox from "../shared/SearchBox";
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
    </>
  );
};

export default Home;
