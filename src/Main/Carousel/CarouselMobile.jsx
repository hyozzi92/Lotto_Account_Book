import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LottoSummary from '../LottoSummary/LottoSummary';
import './CarouselDesktop.scss';
const CarouselMobile = () => {
  const settingsMobile = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    autoplay: true, //자동시작 (boolean) -default:false
    autoplaySpeed: 0,
    pauseOnFocus: false,
    nextArrow: (
      <NextArrow>
        <ArrowForwardIosIcon />
      </NextArrow>
    ),
    prevArrow: (
      <PrevArrow>
        <ArrowBackIosIcon />
      </PrevArrow>
    ),
  };
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <StyledSliderMobile {...settingsMobile} className="mainCarousel">
      {arr2.map((e, i) => {
        return (
          <div className="sliderWrap" key={i} id={e}>
            <LottoSummary />
          </div>
        );
      })}
    </StyledSliderMobile>
  );
};

export default CarouselMobile;

const StyledSliderMobile = styled(Slider)`
  margin-top: 20px;
  height: 400px;
  position: relative;
  .slick-list {
    width: 100vw;
    margin: 0 auto;
    background-color: grey;
    z-index: 1;
  }
  .slick-slide div {
    width: 100%;
    background-color: white;
  }
  .slick-arrow.slick-arrow {
    z-index: 10;
    width: 50px;
    height: 50px;
    background: rgba($bk, 0.2);
    border-radius: 50%;
    transition: background 0.5s;
    &:hover {
      background: rgba($pt, 0.9);

      &::before {
        color: rgba($bk, 0.5);
      }
    }
    &::before {
      font-family: 'Line Awesome Free';
      font-weight: 900;
      font-size: 49px;
      transition: all 0.5s;
    }
  }
  .slick-prev {
    left: 30px;

    &::before {
      content: '';
    }
  }

  .slick-next {
    right: 30px;

    &::before {
      content: '';
    }
  }
  .slick-dots {
    position: absolute;
    bottom: -40px;
  }
`;
const PrevArrow = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 16px;
  z-index: 99;
  color: black;
  text-align: center;
  line-height: 30px;

  &:hover {
    color: grey;
    background-color: white;
    opacity: 0.5;
  }
`;
const NextArrow = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 16px;
  z-index: 99;
  color: black;
  text-align: center;
  line-height: 30px;

  &:hover {
    color: grey;
    background-color: white;
    opacity: 0.5;
  }
`;
