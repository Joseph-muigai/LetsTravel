import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>
                Subscribe to our newsletter for useful travelling insights
              </h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email address" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi tempora maxime assumenda rem enim facere exercitationem
                magnam neque odio, possimus eos ab atque quos totam molestias
                recusandae sapiente distinctio quo.{" "}
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img-box">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
