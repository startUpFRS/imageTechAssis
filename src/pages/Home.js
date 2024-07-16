import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/Home.css";
import HomeTabs from "../components/HomeTabs";
import ImageData from "../components/ImageData";

const Home = () => {
  return (
    <div className="Home">
      <div className="container-fluid">
        <div className="row">
          <HomeTabs />
        </div>
        <div className="row">
          <ImageData />
        </div>
      </div>
    </div>
  );
};

export default Home;
