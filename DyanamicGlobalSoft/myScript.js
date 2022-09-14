var slider = tns({
    container: '.my-slider',
    items: 2,
    slideBy: 1,
    autoplay: false,
    controlsContainer: "#custom-control",
    gutter:15,
    edgePadding:15,

    mouseDrag: true,
    responsive: {
    0: {
      items: 1,
      nav: false
    },
    768: {
      items: 2,

    },
    1440: {
      items: 2
    }
  }


  });
  var slider = tns({
      container: '.slider',
      items: 1,
      slideBy: 1,
      speed:500,
      axis:'vertical',
      controls: false,
      autoplayButtonOutput:0,
      controls:0,
      navContainer: '.sliderNavs',
      navAsThumbnails: true,
      responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 1,
        nav: true
      },
      1440: {
        items: 1
      }
    }
    });
