export default {
  dots: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  lazyLoad: 'progressive',
  responsive: [
    {breakpoint: 920, settings: {slidesToShow: 2, slidesToScroll: 2}},
    {breakpoint: 640, settings: {slidesToShow: 1, slidesToScroll: 1}},
  ],
};
