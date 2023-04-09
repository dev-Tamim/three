$('.responsive_slide').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    arrows:false,
    autoplay: true,
  autoplaySpeed: 2000,
  });
$('.team_logo').slick({
    slidesToShow: 5,
    slidesToScroll:1,
    arrows:false,
    autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    }
  ]
  });
$('.website_slide').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    arrows:false,
    autoplay: true,
  autoplaySpeed: 2000,
  });
  new VenoBox({
    selector: ".my-link"
});