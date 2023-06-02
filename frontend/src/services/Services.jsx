import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgurl: weatherImg,
    title: "Calculate weather",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolore possimus aliquam",
  },
  {
    imgurl: guideImg,
    title: "Best Tour Guide",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolore possimus aliquam",
  },
  {
    imgurl: customizationImg,
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolore possimus aliquam",
  },
];
const Services = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default Services;
