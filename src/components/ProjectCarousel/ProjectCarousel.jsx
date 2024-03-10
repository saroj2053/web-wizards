import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProjectCarousel.css";
import { Carousel } from "react-responsive-carousel";
import index1Img from "../../assets/campusflow-images/Index1.png";
import index2Img from "../../assets/campusflow-images/Index2.png";
import index3Img from "../../assets/campusflow-images/Index3.png";
import index4Img from "../../assets/campusflow-images/Index4.png";
import index5Img from "../../assets/campusflow-images/Index5.png";
import index6Img from "../../assets/campusflow-images/Index6.png";
import index7Img from "../../assets/campusflow-images/Index7.png";
import index8Img from "../../assets/campusflow-images/Index8.png";
import index9Img from "../../assets/campusflow-images/Index9.png";
import index10Img from "../../assets/campusflow-images/Index10.png";
import index11Img from "../../assets/campusflow-images/Index11.png";
import index12Img from "../../assets/campusflow-images/Index12.png";
import index13Img from "../../assets/campusflow-images/Index13.png";
import index14Img from "../../assets/campusflow-images/Index14.png";
import index15Img from "../../assets/campusflow-images/Index15.png";
import index16Img from "../../assets/campusflow-images/Index16.png";
import index17Img from "../../assets/campusflow-images/Index17.png";
import index18Img from "../../assets/campusflow-images/Index18.png";
import index19Img from "../../assets/campusflow-images/Index19.png";
import giphyImg from "../../assets/giphy.gif";

const ProjectCarousel = () => (
  <>
    <div className="product__highlights">
      <h1 className="product__highlights-heading">Product Highlights</h1>
      {/* <p>Product Launch will commence on 5th March at 12PM...</p>
      <img
        style={{ width: "30%", objectFit: "contain", margin: "0 auto" }}
        src={giphyImg}
        alt="minion playing guitar"
      /> */}

      <Carousel autoPlay>
        <div>
          <img className="carousel__img" alt="" src={index1Img} />
          <p className="legend" id="format">
            User landing Page
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index2Img} />
          <p className="legend" id="format">
            List of modules across all universities
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index3Img} />
          <p className="legend" id="format">
            List of Across Universities
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index4Img} />
          <p className="legend" id="format">
            Users can mark their completed modules
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index5Img} />
          <p className="legend" id="format">
            User Profile Section
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index6Img} />
          <p className="legend" id="format">
            Here you can find comparable modules against your respective module
            from another university
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index7Img} />
          <p className="legend" id="format">
            Transfer Credits Declaration Page
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index8Img} />
          <p className="legend" id="format">
            Choose your university where you want to transfer your credits
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index9Img} />
          <p className="legend" id="format">
            Select from which completed modules you want to ask for transfer
            credits
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index10Img} />
          <p className="legend" id="format">
            Upload your transcript and get verified
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index11Img} />
          <p className="legend" id="format">
            See your transfer credit modules option in another university
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index12Img} />
          <p className="legend" id="format">
            Upload your signature
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index13Img} />
          <p className="legend" id="format">
            Now, you're done with transfer credits process, wait for one week to
            get confirmation from university
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index19Img} />
          <p className="legend" id="format">
            User will get notified through email and notification section on
            their homepage
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index14Img} />
          <p className="legend" id="format">
            Admin Home Page
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index15Img} />
          <p className="legend" id="format">
            Admin Panel - User Management
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index16Img} />
          <p className="legend" id="format">
            Admin Panel - Similarity Table for which you have uploaded the pdf
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index17Img} />
          <p className="legend" id="format">
            Admin Panel - One-Click PDF Upload
          </p>
        </div>
        <div>
          <img className="carousel__img" alt="" src={index18Img} />
          <p className="legend" id="format">
            Admin Panel - Admin can manage users transfer credit requests
          </p>
        </div>
      </Carousel>
    </div>
  </>
);

export default ProjectCarousel;
