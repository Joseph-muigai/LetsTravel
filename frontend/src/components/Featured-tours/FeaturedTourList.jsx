import React from "react";
import TourCard from "../../shared/TourCard";
// import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  console.log(featuredTours);
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}

      {!loading &&
        !error &&
        featuredTours?.map((tour, index) => (
          <Col lg="3" className="mb-4" key={index}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedTourList;
