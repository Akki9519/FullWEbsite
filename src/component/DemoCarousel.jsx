import React from 'react';
import './Carousel.css';

const DemoCarousel = () =>{
        return (
            <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="http://1.bp.blogspot.com/-fI0_DU2k5pU/U4HWo0bgUrI/AAAAAAAAACI/AFPcENlBOzw/s1600/Streight-Beautiful-Road-Wallpaper.jpg" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365__340.jpg" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://images.pexels.com/photos/371285/pexels-photo-371285.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          </>
        );
};

export default DemoCarousel;